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
