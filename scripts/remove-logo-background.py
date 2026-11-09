from pathlib import Path
import subprocess
import sys

try:
    from PIL import Image, ImageDraw
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--disable-pip-version-check", "Pillow"])
    from PIL import Image, ImageDraw

source = Path("assets/source/846-logo-original.jpg")
destination = Path("real_images/846-logo.webp")
destination.parent.mkdir(parents=True, exist_ok=True)

image = Image.open(source).convert("RGB")
# Flood only the dark region connected to the canvas edge. The shield's dark
# interior is enclosed by its bright orange/white outline and is not touched.
probe = image.copy()
ImageDraw.floodfill(probe, (0, 0), (255, 0, 255), thresh=175)
probe_pixels = probe.load()
original_pixels = image.load()
alpha = Image.new("L", image.size, 255)
alpha_pixels = alpha.load()

for y in range(image.height):
    for x in range(image.width):
        if probe_pixels[x, y] == (255, 0, 255):
            red, green, blue = original_pixels[x, y]
            luminance = (red * 299 + green * 587 + blue * 114) // 1000
            # Remove the black canvas and softly fade its antialiased edge.
            alpha_pixels[x, y] = max(0, min(255, round((luminance - 18) * 255 / 132)))

image.putalpha(alpha)
image.save(destination, "WEBP", quality=92, method=6)
print(f"Created transparent logo: {destination}")
