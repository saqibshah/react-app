import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://dfed423ba4934358ad34f306157c8197@sentry.io/1861934"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
