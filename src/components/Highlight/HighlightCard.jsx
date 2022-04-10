import { Typography, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CountUp from 'react-countup';
const useStyle = makeStyles({
  wrapperGrid: (props) => {
    switch (props.type) {
      case "confirmed": {
        return { color: "#FF392B" };
      }
      case "recovered": {
        return { color: "#056625" };
      }
      case "deaths": {
        return { color: "#222" };
      }
      case "treatment": {
        return { color: "#e18425" };
      }
      default: {
        return { color: "#000" };
      }
    }
  },
  title: (props) => {
    const genaralStyle = {
      fontSize: 14,
      fontWeight: 700,
      height: 32,
      lineHeight: 2.5,
      borderRadius: 3,
    };
    switch (props.type) {
      case "confirmed": {
        return { ...genaralStyle, background: "rgba(255, 57, 43, 0.1)" };
      }
      case "recovered": {
        return { ...genaralStyle, background: "#DAF2E2" };
      }
      case "deaths": {
        return { ...genaralStyle, background: "#e5e5e5" };
      }
      case "treatment": {
        return { ...genaralStyle, background: "#fcf2e9" };
      }
      default: {
        return { color: "#000" };
      }
    }
  },
  content: { fontWeight: "bold", fontSize: 24 },
  subContent: { fontWeight: "450", fontSize: 12 },
});
export default function HighlightCard({ title, content, subContent, type }) {
  const classes = useStyle({ type });
  return (
    <Card
      elevation={0}
      className={classes.wrapperGrid}
      style={{ minheight: "124px" }}
    >
      <Typography
        component="p"
        variant="h6"
        align="center"
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant="h5"
        align="center"
        className={classes.content}
      >
         <CountUp end={content} separator='.' duration={2} />
      </Typography>
      <Typography
        component="p"
        align="center"
        noWrap
        className={classes.subContent}
      >
        {subContent !== ""
          ? "Công bố hôm qua +" +
            subContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          : ""}
      </Typography>
    </Card>
  );
}
