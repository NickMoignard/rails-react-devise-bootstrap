# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '>= 2.0.0'

# rails-react-devise-bootstrap repository dependencies, please don't touch them.
gem 'bootsnap', '~> 1.4.5', require: false
gem 'devise', '~> 4.6.2'
gem 'jwt', '~> 2.2.1'
gem 'puma', '~> 4.1.0'
gem 'rails', '~> 5.2.3'
gem 'sass-rails', '~> 5.1.0'
gem 'sqlite3', '~> 1.4.0'
gem 'uglifier', '>= 4.2.0'
gem 'webpacker', '~> 4.0.7'

# Add your dependencies after this lines.
# This will avoids conflicts when merging the upstream project.

group :development do
  gem 'active_record_migration_ui', '~> 0.1.2'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '~> 3.27.0'
  gem 'capybara-screenshot', '~> 1.0.22'
  gem 'cucumber-rails', '~> 1.8.0', require: false
  gem 'database_cleaner', '~> 1.7.0'
  gem 'email_spec', '~> 2.2.0'
  gem 'ffaker', '~> 2.12.0'
  gem 'rspec-expectations', '~> 3.8.4'
  gem 'selenium-webdriver', '~> 3.142.6'
end
