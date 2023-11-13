import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";
import lastNewsPng from "../../../assets/images/ultimas_noticias.png";

interface SourceObject {
  id?: string;
  name?: string;
}
interface NewDetailProps {
  author?: string;
  content?: string | null;
  description?: string | null;
  publishedAt?: string | null;
  source?: SourceObject;
  title?: string | null;
  url: string;
  urlToImage?: string | null;
}
interface Props {
  newDetail: NewDetailProps;
}
const NewDetail = ({ newDetail }: Props) => {
  const { urlToImage, url, title, description, source } = newDetail;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        <CardMedia
          component="img"
          alt={`new-image-${title}`}
          image={urlToImage ? urlToImage : lastNewsPng}
          height="220px"
        />
        <CardContent>
          <Typography variant="body1" color="error">
            {source?.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <CardActions>
            <Link
              href={url}
              target="_blank"
              variant="button"
              width="100%"
              textAlign="center"
              sx={{ textDecoration: "none" }}
            >
              Leer Noticia
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NewDetail;
