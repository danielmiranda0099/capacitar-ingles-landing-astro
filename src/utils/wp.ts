const domain = import.meta.env.WP_DOMAIN;

const api_url = `${domain}/wp-json/wp/v2`;

export const get_data_slider_graduations = async () => {
  const res = await fetch(
    `${api_url}/graduations?acf_format=standard&_fields=title,acf`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data in get_data_slider_graduations");
  }

  const data = await res.json();
  return data;
};
