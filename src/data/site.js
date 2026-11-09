const aiHeroImages = import.meta.glob('../../ai_outpainted/AI-*-16x9.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

import loungeFullView from '../../real_images/lounge-full-view.webp';
import loungeFullViewOne from '../../real_images/lounge-full-view-1.webp';
import loungeGuests from '../../real_images/many-people-sitting-in the-lounge.webp';
import outdoorLounge from '../../real_images/outdoor-sitting.webp';
import loungeDancing from '../../real_images/people-dancing-in-the-lounge-1.webp';
import twoLadiesDancing from '../../real_images/2-ladies-dancing.webp';
import hypeMan from '../../real_images/the-hype-man-side-of-entertainment.webp';
import waitressEntertainment from '../../real_images/a-waitress-dacing-with-drink-and-light.webp';
import loungeSign from '../../real_images/846-sign-post.webp';
import drinksBottle from '../../real_images/a-bottle-of-martel-in-the-longe-table.webp';
import snookerImage from '../../real_images/snooker.webp';
import vehicleSalesImage from '../../real_images/Vehicle Sales.webp';
import clearingForwardingImage from '../../real_images/Clearing & Forwarding- main.webp';
import closeShotDancing from '../../real_images/a-close-shot-of-man-dancing-in-the-lounge.webp';
import ladyDancingPhone from '../../real_images/a-lady-dancing-using-her-phone-as-camera.webp';
import ladyEarConversation from "../../real_images/a-lady-telling-her-friend-something-in-her-ear-while-they're-dancing.webp";
import manGreeting from '../../real_images/a-man-saying-hi-to-the-camera-in-the-lounge.webp';
import manDrinks from '../../real_images/a-man-showing-off-with-drinks.webp';
import manWalking from '../../real_images/a-man-walking-inside-the-lounge.webp';
import waitressMartell from '../../real_images/a-waitress-dancing-with-a-martel-bottle.webp';
import waitressHennessy from '../../real_images/a-waitress-holding-a-hennesy-bottle.webp';
import waitressJameson from '../../real_images/a-waitress-holding-a-jameson-bottle-with-a-light-on-top-of-the-bottle.webp';
import womanCup from '../../real_images/a-woman-dancing-with-a-cup-on-her-hand.webp';
import womanWithMan from '../../real_images/a-woman-dancing-with-a-man.webp';
import groupLounge from '../../real_images/group-of-men-looking-at-the-camera-and-sitting-on-the-vip-lounge.webp';
import jamesonBottle from '../../real_images/side-view-of-the-jameson-bottle.webp';
import handshakeOne from '../../real_images/two-men-shaking-hands-in-the-lounge.webp';
import handshakeTwo from '../../real_images/two-men-shaking-hands-in-the-lounge-1.webp';
import smilingGuest from '../../real_images/woman smiling and showing her hand.webp';
import womanSoloDance from '../../real_images/woman-dacing-on-her-own-inside-the-lounge.webp';
import womanClockIt from '../../real_images/woman-on the lounge-doing-clock-it.webp';
import womanGreeting from '../../real_images/woman-saying-hi-to-the-camera.webp';
import womanDancingLook from '../../real_images/a-woman-dancing-ooking-at-her-body.webp';
import ladyDancing from '../../real_images/a-lady-dancing-and-shaking-her-bum-bum.webp';
import waitressService from '../../real_images/a-waitress-dacing-with-drink-and-light.webp';
import moneyCelebration from '../../real_images/people-spraying-money-in-the-lounge.webp';
import grilledChicken from '../../real_images/grilled-chicken-in a griller.webp';

const pexelsPartyVideo =
  'https://videos.pexels.com/video-files/6174256/6174256-hd_1920_1080_30fps.mp4';
const pexelsCarWashVideo =
  'https://videos.pexels.com/video-files/4849141/4849141-hd_1920_1080_24fps.mp4';

const aiHeroSlides = Object.entries(aiHeroImages)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([path, src]) => {
    const match = path.match(/AI-(\d+)-(outpainted|zoom)-16x9\.jpg$/);
    const imageId = match?.[1] ?? '';
    const variant = match?.[2] ?? 'landscape';
    return {
      src,
      alt: `846 Autos AI landscape image ${imageId}, ${variant} 16:9 version`,
    };
  });

const originalHeroSlides = [
  { src: loungeFullView, alt: 'Wide view of the 846 lounge interior and seating' },
  { src: closeShotDancing, alt: 'A guest dancing inside the 846 lounge' },
  { src: loungeGuests, alt: 'Guests enjoying the atmosphere inside the 846 VIP lounge' },
  { src: ladyDancingPhone, alt: 'A guest recording a moment while dancing at the lounge' },
  { src: loungeDancing, alt: 'Guests dancing and enjoying entertainment at the 846 lounge' },
  { src: ladyEarConversation, alt: 'Guests socialising inside the 846 lounge' },
  { src: hypeMan, alt: 'The hype man bringing energy to entertainment at 846' },
  { src: manGreeting, alt: 'A guest greeting the camera inside the lounge' },
  { src: outdoorLounge, alt: 'Outdoor lounge seating area at 846' },
  { src: manDrinks, alt: 'A guest enjoying drinks at the lounge' },
  { src: twoLadiesDancing, alt: 'Two guests dancing during an event at the 846 lounge' },
  { src: waitressMartell, alt: 'Lounge hospitality and bottle service' },
  { src: waitressService, alt: 'Lounge service and entertainment at 846' },
  { src: waitressHennessy, alt: 'Refreshments being served at the lounge' },
  { src: loungeFullViewOne, alt: 'Another view of the 846 lounge interior' },
  { src: waitressJameson, alt: 'A bottle presentation at the 846 lounge' },
  { src: groupLounge, alt: 'Guests seated together inside the VIP lounge' },
  { src: womanCup, alt: 'A guest enjoying the music and atmosphere' },
  { src: jamesonBottle, alt: 'A bottle displayed at the 846 bar' },
  { src: womanWithMan, alt: 'Guests dancing together at the lounge' },
  { src: handshakeOne, alt: 'Guests meeting inside the lounge' },
  { src: womanSoloDance, alt: 'A guest dancing inside the lounge' },
  { src: handshakeTwo, alt: 'Guests connecting at the 846 lounge' },
  { src: womanGreeting, alt: 'A guest greeting the camera at 846' },
  { src: smilingGuest, alt: 'A guest enjoying the 846 lounge experience' },
  { src: womanClockIt, alt: 'A guest dancing to the music' },
  { src: moneyCelebration, alt: 'A lively celebration inside the lounge' },
  { src: grilledChicken, alt: 'Grilled food served as part of the lounge experience' },
  { src: drinksBottle, alt: 'A bottle displayed on a lounge table' },
  { src: loungeSign, alt: 'The 846 Autos sign outside the venue' },
  { src: manWalking, alt: 'A guest walking through the 846 lounge' },
  { src: womanDancingLook, alt: 'A guest dancing at the lounge' },
  { src: ladyDancing, alt: 'A guest enjoying the entertainment' },
];

// Keep the homepage carousel focused and lightweight: 10 AI images interleaved
// with 10 original 846 photos, rather than loading the entire image collection.
export const heroSlides = aiHeroSlides.flatMap((slide, index) => {
  const original = index % 2 === 1 ? originalHeroSlides[(index - 1) / 2] : null;
  return original ? [slide, original] : [slide];
}).concat(originalHeroSlides.slice(Math.ceil(aiHeroSlides.length / 2))).slice(0, 20);

export const eventGallery = [
  { src: '/images/event/gallery-opening-banner.webp', alt: 'The 846 Lounge Official Opening banner announcing Saturday 26th September, with Top DJs and Top Hypers', caption: 'Official Opening' },
  { src: '/images/event/gallery-signboard.webp', alt: 'The illuminated 846 Autos Ltd signboard listing car sales, clearing and forwarding, VIP bar and lounge, car wash and snooker', caption: 'The 846 signboard' },
  { src: '/images/event/gallery-photo-backdrop.webp', alt: 'The 846 Lounge photo backdrop with balloons and hedging, showing the logo and snooker balls', caption: 'Photo backdrop' },
  { src: '/images/event/gallery-outdoor-seating.webp', alt: 'Long tables with floral cloths and white chair covers on artificial grass under a canopy of balloons', caption: 'Outdoor seating' },
  { src: '/images/event/gallery-grilled-chicken.webp', alt: 'Red-marinated grilled chicken on a metal rack', caption: 'Grill' },
  { src: '/images/event/gallery-bar-martell.webp', alt: 'A Martell VS bottle with an illuminated topper on the bar, with spirits shelves and shot glasses behind', caption: 'The bar' },
  ...aiHeroSlides.map((slide, index) => ({
    ...slide,
    caption: `AI landscape ${String(index + 1).padStart(2, '0')}`,
  })),
  { src: loungeFullView, alt: 'Original 846 lounge interior photograph', caption: 'Lounge interior' },
  { src: loungeDancing, alt: 'Original photograph of guests dancing at 846', caption: 'Lounge entertainment' },
  { src: hypeMan, alt: 'Original photograph of the 846 entertainment host', caption: 'Entertainment host' },
  { src: drinksBottle, alt: 'Original photograph of a bottle on the 846 lounge table', caption: 'At the bar' },
];

export const services = [
  {
    number: '01',
    name: 'VIP Lounge & Bar',
    eyebrow: 'Relax • Connect • Unwind',
    description: 'A comfortable place to step away from the rush, meet friends, catch up and enjoy the atmosphere. The lounge and bar sit at the heart of the 846 experience, whether you are stopping by for a relaxed visit or making an evening of it.',
    image: loungeFullView,
    homeImage: loungeFullView,
    icon: 'lounge',
  },
  {
    number: '02',
    name: 'DJ & Entertainment',
    eyebrow: 'Music • Energy • Atmosphere',
    description: 'Music helps set the tone. DJ entertainment brings energy to the space and gives guests another reason to gather, enjoy the atmosphere and spend time together. Ask the team about the entertainment planned for your visit.',
    image: hypeMan,
    homeImage: hypeMan,
    video: pexelsPartyVideo,
    icon: 'music',
  },
  {
    number: '03',
    name: 'Drinks & Refreshments',
    eyebrow: 'A drink for the moment',
    description: 'Enjoy drinks and refreshments as part of your lounge visit. Whether you are catching up with friends, taking a break between games or settling in for the evening, the bar is part of the wider 846 social experience.',
    image: drinksBottle,
    homeImage: drinksBottle,
    icon: 'drink',
  },
  {
    number: '04',
    name: 'Snooker',
    eyebrow: 'Play • Compete • Enjoy',
    description: 'Bring friends together for a game, practise your shots or enjoy some friendly competition. Snooker adds an active social experience to the lounge, giving guests another way to spend quality time at 846.',
    image: snookerImage,
    homeImage: snookerImage,
    icon: 'snooker',
  },
  {
    number: '05',
    name: 'Car Wash',
    eyebrow: 'Care for your vehicle',
    description: 'Keep your vehicle looking presentable with car wash services. Whether you are visiting for the lounge or coming specifically for vehicle care, contact the team to confirm available wash options and current service arrangements.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85',
    homeImage: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1400&q=85',
    video: pexelsCarWashVideo,
    icon: 'wash',
  },
  {
    number: '06',
    name: 'Vehicle Sales',
    eyebrow: 'Find your next vehicle',
    description: '846 Autos also handles vehicle sales enquiries. Speak with the team about the vehicles currently available, request confirmed specifications and pricing, and arrange the next steps for inspection or purchase. Availability is confirmed directly rather than assumed from outdated listings.',
    image: vehicleSalesImage,
    homeImage: vehicleSalesImage,
    icon: 'car',
  },
  {
    number: '07',
    name: 'Clearing & Forwarding',
    eyebrow: 'Movement • Coordination • Support',
    description: 'For clearing and forwarding enquiries, contact 846 Autos with the details of your vehicle, shipment or logistics requirement. The team can discuss the information needed, the process involved and the appropriate next steps for your request.',
    image: clearingForwardingImage,
    homeImage: clearingForwardingImage,
    icon: 'logistics',
  },
];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Contact', href: '/contact' },
];
