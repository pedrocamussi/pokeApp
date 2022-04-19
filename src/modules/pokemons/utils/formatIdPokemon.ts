export const formatPokemonId = (id: number): string => {
	if (!id) return '';
	const toString = id.toString();
	const length = toString.length;
	if (length === 1) return `#00${id}`;
	if (length === 2) return `#0${id}`;
};
