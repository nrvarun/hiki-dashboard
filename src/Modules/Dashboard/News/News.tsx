import { Grid, Link } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import { StyledDocumentItem } from "../dashboard.style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import NewsItem from "./NewsItem";
import { StyledNewsListings } from "./news.style";

type Props = {};

var settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const News = (props: Props) => {
  return (
    <DashboardCard
      title="News"
      action={
        <Link href="#" variant="subtitle2">
          Add Article
        </Link>
      }
    >
      <StyledNewsListings>
        <Slider {...settings}>
          <div>
            <NewsItem />
          </div>
          <div>
            <NewsItem />
          </div>
          <div>
            <NewsItem />
          </div>
          <div>
            <NewsItem />
          </div>
        </Slider>
      </StyledNewsListings>
    </DashboardCard>
  );
};

export default News;
