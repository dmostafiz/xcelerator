interface Link {
  ICON: string;
  LINK: string;
}

interface Navigation {
  LOGO: string;
  LINKS: Link[];
}

interface HeroForm {
  TITLE: JSX.Element;
  FORM_DESCRIPTION: string;
}

interface Hero {
  BACKGROUND: string;
  VIDEO: string;
  HEADING1: string;
  HEADING2: string;
  VIDEO_TEXT1: string;
  VIDEO_TITLE: string;
  DESCRIPTION: string;
  FORM: HeroForm;
}

interface TravelItem {
  TEXT: string;
}

interface Travel {
  TRAVEL_TEXT: string;
  TRAVEL_TITLE: string;
  TRAVEL_DESCRIPTION: string;
  TRAVEL_IMAGE: string;
  ITEMS: TravelItem[];
}

interface Products {
  PRODUCT_IMG: string;
  PRODUCT_BTN_TEXT: string;
  TITLE: string;
  DESCRIPTION: string;
}

interface Metals {
  METAL_TEXT: string;
  TITLE: string;

  METAL_DESCRIPTION: string;
  SUB_DESCRIPTION: string;
}

interface Home {
  NAVIGATION: Navigation;
  HERO: Hero;
  TRAVEL: Travel;
  PRODUCTS: Products;
  METALS: Metals;
}

export const HOME: Home = {
  NAVIGATION: {
    LOGO: "/icons/nav-logo.svg",
    LINKS: [
      {
        ICON: "/icons/fb-icon.svg",
        LINK: "#",
      },
      {
        ICON: "/icons/x-icon.svg",
        LINK: "#",
      },
      {
        ICON: "/icons/insta-icon.svg",
        LINK: "#",
      },
    ],
  },
  HERO: {
    BACKGROUND: "/img/hero-bg-img.png",
    VIDEO: "public/img/hero-video.png",
    HEADING1: "This $20 business changes",
    HEADING2: "Everything",
    VIDEO_TEXT1: "A GLOBAL OPPORTUNITY",
    VIDEO_TITLE: "WATCH THIS VIDEO",
    DESCRIPTION: "Network Marketing will never be the same",
    FORM: {
      TITLE: (
        <>
          Easy <span>to join and share</span>
        </>
      ),
      FORM_DESCRIPTION: "Includes Complete Marketing System",
    },
  },
  TRAVEL: {
    TRAVEL_TEXT: "travel and shopping discounts",
    TRAVEL_TITLE:
      "Imagine getting paid to help people save money on the products and services they are already buying.",
    TRAVEL_DESCRIPTION: "Travel the world and work from anywhere",
    TRAVEL_IMAGE: "public/img/beauty-girl-bg.png",
    ITEMS: [
      {
        TEXT: "Over 800,000 hotels ",
      },
      {
        TEXT: "155,000 retailers",
      },
      {
        TEXT: "80,000 restaurants Theme parks and concert tickets",
      },
      {
        TEXT: "Rental cars and oil changes",
      },
      {
        TEXT: "All inclusive resorts",
      },
    ],
  },
  PRODUCTS: {
    PRODUCT_IMG: "/img/product-img.png",
    PRODUCT_BTN_TEXT: "our nutritional products",
    TITLE:
      "Nutritional Supplements, personal care, skin care  and home care products are a TRILLION dollar opportunity. ",
    DESCRIPTION:
      "Free Retail Store Get paid to share our brand Get paid ever Friday Work your own hours Includes free training",
  },
  METALS: {
    METAL_TEXT: "our precious metals",
    TITLE: "Get paid everytime your customers become members",

    METAL_DESCRIPTION:
      "We buy gold, silver and other precious metals in bulk and pass the savings on to you and your customers. Silver is predicted double in the next 36 - 48 months",
    SUB_DESCRIPTION:
      "Fractional gold bars as small as 1/2 gram Gold and Silver rounds at wholesale pricing Graded American Silver Eagles MS70 Silver Bars as small as 1/2 ounce",
  },
};
