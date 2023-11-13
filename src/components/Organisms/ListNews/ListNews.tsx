/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNews from "../../../hooks/useNews";
import NewDetail from "../../Atoms/NewDetail/NewDetail";

const ListNews = () => {
  const { news, totalNews, handleChangePagination, page }: any = useNews();
  const totalPages = Math.ceil(totalNews / 20);
  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h4" component={"h3"}>
        Ultimas noticias
      </Typography>
      <Grid container spacing={2}>
        {news?.map((item: any, index: number) => (
          <NewDetail key={`new-${index}`} newDetail={item} />
        ))}
      </Grid>
      <Stack spacing={2} direction="row" justifyContent={"center"} marginY={10}>
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePagination}
          page={page}
        />
      </Stack>
    </>
  );
};

export default ListNews;
