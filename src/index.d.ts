declare module "customTypes" {
  interface Props {
    id: string;
    darkMode: boolean;
    topLine: string;
    headLine: string;
    description: string;
    buttonText: string;
    link: string;
    alt: string;
  };
}

module.exports = {
  Props,
};
