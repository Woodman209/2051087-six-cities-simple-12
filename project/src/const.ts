import { IconOptions } from 'leaflet';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer/',
  NotFound = '*'
}

export const RATING_TO_PERCENT_STEP = 20;

export const RoomReview = {
  HeaderText: 'Your review',
  PlaceholderText: 'Tell how was your stay, what you like and what can be improved',
  SubmitButtonText: 'Submit',
  TextCharacterMinLimit: 50,
  TextCharacterMaxLimit: 300,
} as const;

export const CityNames = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const ACTIVE_PIN_SETTING: IconOptions = {
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.336, 37.2],
};

const DEFAULT_PIN_SETTING: IconOptions = {
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.336, 37.2],
};

export const MapPinSettings = {
  Active: ACTIVE_PIN_SETTING,
  Default: DEFAULT_PIN_SETTING,
};
