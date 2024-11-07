export const data = {
	layout: "layouts/now.njk",
	title: "Now",
};

export function render(data) {
	return `<h1>${data.title}</h1><p>It's going to be a mess around here for a little while.`;
}
