// Import all icon SVGs
import accountIcon from './svg/account.svg';
import activityIcon from './svg/activity.svg';
import arrowDownSlimIcon from './svg/arrow-down-slim.svg';
import arrowLeftIcon from './svg/arrow-left.svg';
import arrowRightIcon from './svg/arrow-right.svg';
import arrowUpSlimIcon from './svg/arrow-up-slim.svg';
import backIcon from './svg/back.svg';
import bellIcon from './svg/bell.svg';
import betSlipIcon from './svg/bet-slip.svg';
import calendarScheduleIcon from './svg/calendar-schedule.svg';
import closeIcon from './svg/close.svg';
import closeCircleIcon from './svg/close-circle.svg';
import closeThinIcon from './svg/close-thin.svg';
import contactUsIcon from './svg/contact-us.svg';
import couponsIcon from './svg/coupons.svg';
import downloadIcon from './svg/download.svg';
import editIcon from './svg/edit.svg';
import emailIcon from './svg/email.svg';
import errorNotificationsIcon from './svg/error-notifications.svg';
import exclusiveIcon from './svg/exclusive.svg';
import eyeOpenIcon from './svg/eye-open.svg';
import eyeStrikeIcon from './svg/eye-strike.svg';
import favOutlineIcon from './svg/fav-outline.svg';
import favsIcon from './svg/favs.svg';
import feedbackIcon from './svg/feedback.svg';
import filterIcon from './svg/filter.svg';
import filtersIcon from './svg/filters.svg';
import fullScreenIcon from './svg/full-screen.svg';
import gamesIcon from './svg/games.svg';
import hamburgerNavIcon from './svg/hamburger-nav.svg';
import helpIcon from './svg/help.svg';
import helpCircleIcon from './svg/help-circle.svg';
import highlightsIcon from './svg/highlights.svg';
import homeIcon from './svg/home.svg';
import iconPlaceholderIcon from './svg/icon placeholder.svg';
import infoCircleIcon from './svg/info-circle.svg';
import linkArrowIcon from './svg/link arrow.svg';
import listIcon from './svg/list.svg';
import liveIndicatorColorIcon from './svg/live-indicator-color.svg';
import lockIcon from './svg/lock.svg';
import logoutIcon from './svg/logout.svg';
import messagesIcon from './svg/messages.svg';
import minusIcon from './svg/minus.svg';
import moreIcon from './svg/more.svg';
import muteIcon from './svg/mute.svg';
import pauseIcon from './svg/pause.svg';
import phoneIcon from './svg/phone.svg';
import playIcon from './svg/play.svg';
import plusIcon from './svg/plus.svg';
import plusCardIcon from './svg/plus-card.svg';
import printIcon from './svg/print.svg';
import promotionsIcon from './svg/promotions.svg';
import radioIcon from './svg/radio.svg';
import refreshIcon from './svg/refresh.svg';
import removeIcon from './svg/remove.svg';
import resultsIcon from './svg/results.svg';
import rewardsIcon from './svg/rewards.svg';
import rulesIcon from './svg/rules.svg';
import searchIcon from './svg/search.svg';
import selectIcon from './svg/select.svg';
import settingsIcon from './svg/settings.svg';
import shareIcon from './svg/share.svg';
import shuffleIcon from './svg/shuffle.svg';
import sortByIcon from './svg/sort-by.svg';
import statsIcon from './svg/stats.svg';
import stopIcon from './svg/stop.svg';
import successIcon from './svg/success.svg';
import successFilledIcon from './svg/success-filled.svg';
import tickIcon from './svg/tick.svg';
import timeIcon from './svg/time.svg';
import timelapseIcon from './svg/timelapse.svg';
import trashIcon from './svg/trash.svg';
import tvIcon from './svg/tv.svg';

// Icon map for easy access
export const iconMap = {
  account: accountIcon,
  activity: activityIcon,
  'arrow-down-slim': arrowDownSlimIcon,
  'arrow-left': arrowLeftIcon,
  'arrow-right': arrowRightIcon,
  'arrow-up-slim': arrowUpSlimIcon,
  back: backIcon,
  bell: bellIcon,
  'bet-slip': betSlipIcon,
  'calendar-schedule': calendarScheduleIcon,
  close: closeIcon,
  'close-circle': closeCircleIcon,
  'close-thin': closeThinIcon,
  'contact-us': contactUsIcon,
  coupons: couponsIcon,
  download: downloadIcon,
  edit: editIcon,
  email: emailIcon,
  'error-notifications': errorNotificationsIcon,
  exclusive: exclusiveIcon,
  'eye-open': eyeOpenIcon,
  'eye-strike': eyeStrikeIcon,
  'fav-outline': favOutlineIcon,
  favs: favsIcon,
  feedback: feedbackIcon,
  filter: filterIcon,
  filters: filtersIcon,
  'full-screen': fullScreenIcon,
  games: gamesIcon,
  'hamburger-nav': hamburgerNavIcon,
  help: helpIcon,
  'help-circle': helpCircleIcon,
  highlights: highlightsIcon,
  home: homeIcon,
  'icon-placeholder': iconPlaceholderIcon,
  'info-circle': infoCircleIcon,
  'link-arrow': linkArrowIcon,
  list: listIcon,
  'live-indicator': liveIndicatorColorIcon,
  lock: lockIcon,
  logout: logoutIcon,
  messages: messagesIcon,
  minus: minusIcon,
  more: moreIcon,
  mute: muteIcon,
  pause: pauseIcon,
  phone: phoneIcon,
  play: playIcon,
  plus: plusIcon,
  'plus-card': plusCardIcon,
  print: printIcon,
  promotions: promotionsIcon,
  radio: radioIcon,
  refresh: refreshIcon,
  remove: removeIcon,
  results: resultsIcon,
  rewards: rewardsIcon,
  rules: rulesIcon,
  search: searchIcon,
  select: selectIcon,
  settings: settingsIcon,
  share: shareIcon,
  shuffle: shuffleIcon,
  'sort-by': sortByIcon,
  stats: statsIcon,
  stop: stopIcon,
  success: successIcon,
  'success-filled': successFilledIcon,
  tick: tickIcon,
  time: timeIcon,
  timelapse: timelapseIcon,
  trash: trashIcon,
  tv: tvIcon,
};

// Get list of icon names for dropdown
export const iconNames = Object.keys(iconMap);

// Default to 'none' for no icon
export const getIcon = (iconName) => {
  if (!iconName || iconName === 'none') return null;
  return iconMap[iconName];
};
