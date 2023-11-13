/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { CATEGORIAS, COUNTRIES } from "../../../common/utils/categories";
import useNews from "../../../hooks/useNews";

const FormSearchNew = () => {
  const { category, onChangeCategory, onChangeCountry, country }: any =
    useNews();
  return (
    <form>
      <div
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <FormControl sx={{ width: "48%" }}>
          <InputLabel>Categoria</InputLabel>
          <Select
            label="Categoria"
            onChange={onChangeCategory}
            value={category}
          >
            {CATEGORIAS.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "48%" }}>
          <InputLabel>Pais</InputLabel>
          <Select label="Pais" onChange={onChangeCountry} value={country}>
            {COUNTRIES.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* <Box sx={{ marginTop: 2 }}>
        <Button fullWidth variant="contained">
          Buscar noticias
        </Button>
      </Box> */}
    </form>
  );
};

export default FormSearchNew;
