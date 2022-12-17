import porkSpareRibsImg from '../img/porkSpareRibs.jpg';
import brisketSandwich from '../img/brisketSandwich.jpg';
import pulledPorkSandwich from '../../assets/img/pulledPorkSandwich.jpg';
import smokedBolognaSandwich from '../../assets/img/smokedBolognaSandwich.jpg';
import porkBellyBurntEnds from '../../assets/img/porkBellyBurntEnds.jpg';
import hotLinks from '../../assets/img/hotLinks.jpg';
import macAndCheese from '../../assets/img/macAndCheese.jpg';
import cornBake from '../../assets/img/cornBake.jpg';
import coleSlaw from '../img/coleSlaw.jpg';
import applePie from '../img/applePie.jpg';
import snickerdoodleSmore from '../img/snickerdoodleSmore.png';


export const MENUITEMS = [
    {
        id: 0,
        type: 'meats',
        name: 'Pork Spare Ribs',
        image: porkSpareRibsImg,
        description: 'Slow smoked and slathered in our house sauce, "Lost in the Sauce".',
        price: '1/4 , 1/2, Full Rack...............$10/16/28',
    },
    {
        id: 1,
        type: 'meats',
        name: 'Chopped Brisket Sandwich',
        image: brisketSandwich,
        description: 'Covered in our Coffee Rub, smoked 18 hours.',
        price: 'per sandwich...............$14',
    },
    {
        id: 2,
        type: 'meats',
        name: 'Pulled Pork Sandwhich',
        image: pulledPorkSandwich,
        description: 'Chopped pork shoulder, smoked slow and low.',
        price: 'per sandwich...............$12',
    },
    {
        id: 3,
        type: 'meats',
        name: 'Smoked Bologna Sandwhich',
        image: smokedBolognaSandwich,
        description: 'Sliced bologna, smoked slow and low.',
        price: 'per sandwich...............$8',
    },
    {
        id: 0,
        type: 'shareable',
        name: 'Pork Belly Burn Ends',
        image: porkBellyBurntEnds,
        description: 'Crisp pork belly burn ends covered in house sauce.',
        price: '1/2 lb...............$10',
    },
    {
        id: 1,
        type: 'shareable',
        name: 'Smoked Texas Hot Links',
        image: hotLinks,
        description: 'Hot and Spicey like the Texas sun!',
        price: 'per link...............$7',
    },
    {
        id: 0,
        type: 'sides',
        name: 'Mac N Cheese',
        image: macAndCheese,
        description: 'Thich and cheese. Better than the blue box stuff.',
        price: 'per cup...............$4',
    },
    {
        id: 1,
        type: 'sides',
        name: 'Corn Bake',
        image: cornBake,
        description: 'Homemade delicious corn bake.',
        price: ' per slice...............$4',
    },
    {
        id: 2,
        type: 'sides',
        name: 'Spicey Cole Slaw',
        image: coleSlaw,
        description: 'Cole Slaw with a Strawberries BBQ kick!',
        price: 'per slice...............$4',
    },

    {
        id: 0,
        type: 'desserts',
        name: 'Smoked Apple Pie',
        image: applePie,
        description: 'Delicious apple pie slow smoked in our smoker.',
        price: 'per slice...............$4',
    },
    {
        id: 1,
        type: 'desserts',
        name: `Snickerdoodle S'More.`,
        image: snickerdoodleSmore,
        description: 'Our in house creation. Thick gooey and delicious!',
        price: `per S'More ...............$7`,
    },
];