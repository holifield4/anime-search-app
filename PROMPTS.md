# Prompts

All related prompts throughout the development of this project

## Pagination

```js
"pagination": {
"last_visible_page": 1170,
"has_next_page": true,
"current_page": 1,
"items": {
    "count": 25,
    "total": 29246,
    "per_page": 25
}
create a button ios styled pagination component based on this data for example 1 2 3 4 5 .... last number page here
```

## Debounce

```js
const [queries, setQueries] = useState<string>("");

useEffect(() => {
    dispatch(getAnimeAsync(queries));
}, [dispatch, queries]);

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueries(e.target.value);
};

examine and how should i avoid from making api calls for every keystroke entered by user, the api calls should be running when there are no keystrokes in 250ms duration
```


