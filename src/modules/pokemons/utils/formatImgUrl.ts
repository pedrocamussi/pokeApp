export const formatImgUrl = (id: number): string => {
	if (!id) return '';
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};
