export const selectAllPositions = (state) => state.positions;
export const selectFilterPositions = (state, filtered = []) => {
  console.log(filtered);

  if (filtered.length === 0) return state.positions;
  return state.positions.filter((pos) => {
    const filt = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
    return filtered.every((i) => {
      return filt.includes(i);
    });
  });
};
