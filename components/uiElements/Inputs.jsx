import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_PRODUCTS } from "@/redux/reducer/products";
import { useRouter } from "next/router";
export default function Inputs() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, setValue] = React.useState();
  console.log(value, "value");
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <div className=" mt-[30px]   w-[500px] flex">
        <div>
          <input
            type="text"
            placeholder="Search your products from here"
            className="p-3 w-full rounded-l-lg  border focus:outline-none focus:border-[#019376] "
            onChange={(e) => setValue(e.target.value)}
          />
          {products
            ?.filter((item) => {
              if (value === "") {
                return item;
              } else if (
                item?.type?.toLowerCase().includes(value?.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, key) => {
              return (
                <p
                  className="cursor-pointer hover:text-black text-gray-600 "
                  onClick={() => {
                    dispatch(FILTER_PRODUCTS(item?.type));
                    router.push(`/products/filter/${item?.type}`);
                  }}
                >
                  {item?.type}
                </p>
              );
            })}
          {/* <div className="flex flex-col items-start overflow-x-auto h-96">
            {products.map((elm) => {
              return (
                <>
                  <p
                    className="cursor-pointer hover:text-black text-gray-600 "
                    onClick={() => {
                      dispatch(FILTER_PRODUCTS(elm?.type));
                      router.push(`/products/filter/${elm?.type}`);
                    }}
                  >
                    {elm?.type}
                  </p>
                </>
              );
            })}
          </div> */}
          {/* {value && (
            <div className="flex flex-col items-start overflow-x-auto h-96">
              {products.map((elm) => {
                return (
                  <>
                    <p
                      className="cursor-pointer hover:text-black text-gray-600 "
                      onClick={() => {
                        dispatch(FILTER_PRODUCTS(elm?.type));
                        router.push(`/products/filter/${elm?.type}`);
                      }}
                    >
                      {elm?.type}
                    </p>
                  </>
                );
              })}
            </div>
          )} */}
        </div>
        <div>
          <button
            className="border bg-[#019376] text-white p-4 px-8 rounded-r-lg"
            onClick={() => {
              dispatch(FILTER_PRODUCTS(value));
              router.push(`/products/filter/${value}`);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import { useSelector } from "react-redux";
// export default function ComboBox() {
//   const { products } = useSelector((state) => state.products);
//   console.log(products, "products");
//   return (
//     <Autocomplete
//       // disablePortal
//       id="combo-box-demo"
//       options={top100Films}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} placeholder="Search" />}
//     />
//   );
// }

// const top100Films = [
//   { label: "The Shawshank Redemption", year: 1994 },
//   { label: "The Godfather", year: 1972 },
//   { label: "The Godfather: Part II", year: 1974 },
//   { label: "The Dark Knight", year: 2008 },
//   { label: "12 Angry Men", year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: "Pulp Fiction", year: 1994 },
//   {
//     label: "The Lord of the Rings: The Return of the King",
//     year: 2003,
//   },
//   { label: "The Good, the Bad and the Ugly", year: 1966 },
//   { label: "Fight Club", year: 1999 },
//   {
//     label: "The Lord of the Rings: The Fellowship of the Ring",
//     year: 2001,
//   },
//   {
//     label: "Star Wars: Episode V - The Empire Strikes Back",
//     year: 1980,
//   },
//   { label: "Forrest Gump", year: 1994 },
//   { label: "Inception", year: 2010 },
//   {
//     label: "The Lord of the Rings: The Two Towers",
//     year: 2002,
//   },
//   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { label: "Goodfellas", year: 1990 },
//   { label: "The Matrix", year: 1999 },
//   { label: "Seven Samurai", year: 1954 },
//   {
//     label: "Star Wars: Episode IV - A New Hope",
//     year: 1977,
//   },
//   { label: "City of God", year: 2002 },
//   { label: "Se7en", year: 1995 },
//   { label: "The Silence of the Lambs", year: 1991 },
//   { label: "It's a Wonderful Life", year: 1946 },
//   { label: "Life Is Beautiful", year: 1997 },
//   { label: "The Usual Suspects", year: 1995 },
//   { label: "Léon: The Professional", year: 1994 },
//   { label: "Spirited Away", year: 2001 },
//   { label: "Saving Private Ryan", year: 1998 },
//   { label: "Once Upon a Time in the West", year: 1968 },
//   { label: "American History X", year: 1998 },
//   { label: "Interstellar", year: 2014 },
//   { label: "Casablanca", year: 1942 },
//   { label: "City Lights", year: 1931 },
//   { label: "Psycho", year: 1960 },
//   { label: "The Green Mile", year: 1999 },
//   { label: "The Intouchables", year: 2011 },
//   { label: "Modern Times", year: 1936 },
//   { label: "Raiders of the Lost Ark", year: 1981 },
//   { label: "Rear Window", year: 1954 },
//   { label: "The Pianist", year: 2002 },
//   { label: "The Departed", year: 2006 },
//   { label: "Terminator 2: Judgment Day", year: 1991 },
//   { label: "Back to the Future", year: 1985 },
//   { label: "Whiplash", year: 2014 },
//   { label: "Gladiator", year: 2000 },
//   { label: "Memento", year: 2000 },
//   { label: "The Prestige", year: 2006 },
//   { label: "The Lion King", year: 1994 },
//   { label: "Apocalypse Now", year: 1979 },
//   { label: "Alien", year: 1979 },
//   { label: "Sunset Boulevard", year: 1950 },
//   {
//     label:
//       "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
//     year: 1964,
//   },
//   { label: "The Great Dictator", year: 1940 },
//   { label: "Cinema Paradiso", year: 1988 },
//   { label: "The Lives of Others", year: 2006 },
//   { label: "Grave of the Fireflies", year: 1988 },
//   { label: "Paths of Glory", year: 1957 },
//   { label: "Django Unchained", year: 2012 },
//   { label: "The Shining", year: 1980 },
//   { label: "WALL·E", year: 2008 },
//   { label: "American Beauty", year: 1999 },
//   { label: "The Dark Knight Rises", year: 2012 },
//   { label: "Princess Mononoke", year: 1997 },
//   { label: "Aliens", year: 1986 },
//   { label: "Oldboy", year: 2003 },
//   { label: "Once Upon a Time in America", year: 1984 },
//   { label: "Witness for the Prosecution", year: 1957 },
//   { label: "Das Boot", year: 1981 },
//   { label: "Citizen Kane", year: 1941 },
//   { label: "North by Northwest", year: 1959 },
//   { label: "Vertigo", year: 1958 },
//   {
//     label: "Star Wars: Episode VI - Return of the Jedi",
//     year: 1983,
//   },
//   { label: "Reservoir Dogs", year: 1992 },
//   { label: "Braveheart", year: 1995 },
//   { label: "M", year: 1931 },
//   { label: "Requiem for a Dream", year: 2000 },
//   { label: "Amélie", year: 2001 },
//   { label: "A Clockwork Orange", year: 1971 },
//   { label: "Like Stars on Earth", year: 2007 },
//   { label: "Taxi Driver", year: 1976 },
//   { label: "Lawrence of Arabia", year: 1962 },
//   { label: "Double Indemnity", year: 1944 },
//   {
//     label: "Eternal Sunshine of the Spotless Mind",
//     year: 2004,
//   },
//   { label: "Amadeus", year: 1984 },
//   { label: "To Kill a Mockingbird", year: 1962 },
//   { label: "Toy Story 3", year: 2010 },
//   { label: "Logan", year: 2017 },
//   { label: "Full Metal Jacket", year: 1987 },
//   { label: "Dangal", year: 2016 },
//   { label: "The Sting", year: 1973 },
//   { label: "2001: A Space Odyssey", year: 1968 },
//   { label: "Singin' in the Rain", year: 1952 },
//   { label: "Toy Story", year: 1995 },
//   { label: "Bicycle Thieves", year: 1948 },
//   { label: "The Kid", year: 1921 },
//   { label: "Inglourious Basterds", year: 2009 },
//   { label: "Snatch", year: 2000 },
//   { label: "3 Idiots", year: 2009 },
//   { label: "Monty Python and the Holy Grail", year: 1975 },
// ];
