import { StormGlass } from '@src/clients/stormGlass';
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import * as stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import axios from 'axios';

jest.mock('axios');

describe('StormGlass client', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  it('should return the normalized forecast from the StormGlass service', async () => {
        const lat = -30.0297874;
        const lng = -51.2362905;
        mockedAxios.get.mockResolvedValue({ data: stormglassWeatherPointFixture });

        const stormGlass = new StormGlass(mockedAxios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormglassNormalizedResponseFixture);
      });
})