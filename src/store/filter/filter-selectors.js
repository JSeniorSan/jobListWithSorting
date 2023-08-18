import UiBtn from "../../components/UiBtn";
export const selectFilterState = (state) => state.filter;
export const selectFilterBtn = (state) => {
  if (state.filter.length === 0) return [];
  return state.filter.map((value, i) => {
    return <UiBtn name={value} key={i} />;
  });
};
