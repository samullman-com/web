import create from 'zustand'

const colors = create(set => ({
  bears: 0, 
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }), 
  setDark: () => set({ colors: "dark" }), 
  setLight: () => set({})
}))


export default colors;