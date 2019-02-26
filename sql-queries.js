const restaurants = require('./restaurants-cleaned.json');

function getEscapedString(string) {
  return (string || '').replace(/\'/g, "''");
}

const CREATE_AREAS_TABLE_QUERY = `CREATE TABLE IF NOT EXISTS areas (
  id UUID,
  name TEXT NOT NULL,

  PRIMARY KEY (id),
  UNIQUE(name)
);`;

// INSERT_AREAS_QUERY will generate a request in the form:
// INSERT INTO areas (id, name) VALUES
//   (uuid_generate_v4(), 'Belleville'),
//   (uuid_generate_v4(), 'Charonne'),
//   ...
const INSERT_AREAS_QUERY = `
INSERT INTO areas (id, name) VALUES
  ${Array.from(new Set(restaurants.map(restaurant => restaurant.area)))
    .map(area => `(uuid_generate_v4(), '${getEscapedString(area)}')`)
    .join(',')}
`;

const CREATE_RESTAURANTS_TABLE_QUERY = `CREATE TABLE IF NOT EXISTS restaurants (
  id UUID,
  timeout_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  annotation TEXT,
  timeout_webpage_url TEXT,
  image_url TEXT,
  primary_category TEXT,
  secondary_category TEXT,
  area_id UUID,
  street_address TEXT NOT NULL,
  arrondissement TEXT,
  city TEXT,
  latitude NUMERIC(8, 6) NOT NULL,
  longitude NUMERIC(7, 6) NOT NULL,
  editorial_rating INTEGER,
  price_description TEXT,
  price_level INTEGER,

  PRIMARY KEY (id),
  UNIQUE(timeout_id),
  FOREIGN KEY (area_id) REFERENCES areas(id)
);`;

const INSERT_RESTAURANTS_TABLE_QUERY = `INSERT INTO restaurants (
  id,
  name,
  timeout_id,
  description,
  annotation,
  timeout_webpage_url,
  image_url,
  primary_category,
  secondary_category,
  area_id,
  street_address,
  arrondissement,
  city,
  latitude,
  longitude,
  editorial_rating,
  price_description,
  price_level
) VALUES ${restaurants
  .map(
    restaurant => `(
      uuid_generate_v4(),
      '${getEscapedString(restaurant.name)}',
      '${getEscapedString(restaurant.id)}',
      '${getEscapedString(restaurant.description)}',
      '${getEscapedString(restaurant.annotation)}',
      '${getEscapedString(restaurant.timeoutWebpageUrl)}',
      '${getEscapedString(restaurant.imageUrl)}',
      '${getEscapedString(restaurant.primaryCategory)}',
      '${getEscapedString(restaurant.secondaryCategory)}',
      (SELECT id FROM areas WHERE name='${getEscapedString(restaurant.area)}'),
      '${getEscapedString(restaurant.streetAdress)}',
      '${getEscapedString(restaurant.arrondissement)}',
      '${getEscapedString(restaurant.city)}',
      ${restaurant.latitude},
      ${restaurant.longitude},
      ${restaurant.editorialRating || 'NULL'},
      '${getEscapedString(restaurant.priceDescription)}',
      ${restaurant.priceLevel || 'NULL'}
    )`
  )
  .join(', ')}`;

module.exports = {
  CREATE_AREAS_TABLE_QUERY,
  INSERT_AREAS_QUERY,
  CREATE_RESTAURANTS_TABLE_QUERY,
  INSERT_RESTAURANTS_TABLE_QUERY,
};
