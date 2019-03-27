source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'devise', '~> 4.6.2'
gem 'jwt', '~> 2.1.0'
gem 'puma', '~> 3.12.1'
gem 'rails', '~> 5.2.1.1'
gem 'sass-rails', '~> 5.0'
gem 'sqlite3', '~> 1.3.13'
gem 'uglifier', '>= 4.1.20'
gem 'webpacker', '~> 3.5.0'

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '~> 3.9.0'
  gem 'capybara-screenshot', '~> 1.0.22'
  gem 'cucumber-rails', '~> 1.6.0', require: false
  gem 'database_cleaner', '~> 1.7.0'
  gem 'email_spec', '~> 2.2.0'
  gem 'ffaker', '~> 2.10.0'
  gem 'rspec-expectations', '~> 3.8.0'
  gem 'selenium-webdriver', '~> 3.141.0'
end
