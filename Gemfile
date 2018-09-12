source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'devise', '~> 4.4.3'
gem 'jwt', '~> 2.1.0'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.1.5'
gem 'sass-rails', '~> 5.0'
gem 'sqlite3', '~> 1.3.13'
gem 'uglifier', '>= 4.1.19'
gem 'webpacker', '~> 3.4.3'

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '~> 3.3.1'
  gem 'capybara-screenshot', '~> 1.0.21'
  gem 'cucumber-rails', '~> 1.6.0', require: false
  gem 'database_cleaner', '~> 1.7.0'
  gem 'email_spec', '~> 2.2.0'
  gem 'ffaker', '~> 2.9.0'
  gem 'rspec-expectations', '~> 3.7.0'
  gem 'selenium-webdriver', '~> 3.13.0'
end
