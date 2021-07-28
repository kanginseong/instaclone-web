import { Proptypes } from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return <Helmet>{title} | Instaclone</Helmet>;
}

export default PageTitle;
