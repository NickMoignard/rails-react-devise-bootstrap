require 'capybara/rails'

# Capybara defaults to CSS3 selectors rather than XPath.
# If you'd prefer to use XPath, just uncomment this line and adjust any
# selectors in your step definitions to use the XPath syntax.
# Capybara.default_selector = :xpath

Capybara.register_driver :chrome do |app|
  capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
    chromeOptions: {
      args: [
        '--disable-default-apps',
        '--disable-extensions',
        '--disable-infobars',
        '--disable-notifications',
        '--disable-password-generation',
        '--disable-password-manager-reauthentication',
        '--disable-password-separated-signin-flow',
        '--disable-popup-blocking',
        '--disable-save-password-bubble',
        '--disable-translate',
        '--incognito',
        '--mute-audio',
        '--no-default-browser-check',
        '--window-size=1280,1024',
        # '--auto-open-devtools-for-tabs',
        # '--ignore-certificate-errors'
      ]
    },
    prefs: {
      download: { prompt_for_download: false },
      credentials_enable_service: false,
      profile: {
        password_manager_enabled: false,
        default_content_settings: { popups: 0 },
        content_settings: {
          pattern_pairs: {
            '*' => { 'multiple-automatic-downloads' => 1 }
          }
        }
      }
    }
  )

  client = Selenium::WebDriver::Remote::Http::Default.new
  client.read_timeout = 120

  selenium_url = ENV['SELENIUM_REMOTE_URL'] || "http://#{ENV['SELENIUM_HOST'] || 'selenium'}:#{ENV['SELENIUM_PORT'] || 4444}/wd/hub"
  puts "Using the Selenium URL #{selenium_url.inspect} ..."

  Capybara::Selenium::Driver.new(
    app,
    browser: :remote,
    url: selenium_url,
    desired_capabilities: capabilities,
    http_client: client
  )
end

# Defines headless chrome as the Capybara JavaScript driver
Capybara.javascript_driver = :chrome

# Forces all tests to run in Javascript mode
Capybara.default_driver = Capybara.javascript_driver

Capybara.default_max_wait_time = 5

Capybara.server = :puma, { Silent: true }

Capybara.server_host = 'app'
