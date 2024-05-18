import axios from 'axios';

const getRocketSpecs = async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data;
};

const getSpacecraftSpecs = async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/spacecraft');
  return response.data;
};

export { getRocketSpecs, getSpacecraftSpecs };
