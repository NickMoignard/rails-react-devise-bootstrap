# Remove/comment out the lines below if your app doesn't have a database.
# For some databases (like MongoDB and CouchDB) you may need to use :truncation
# instead.
begin
  DatabaseCleaner.strategy = :truncation
rescue NameError
  raise 'You need to add database_cleaner to your Gemfile ' \
        '(in the :test group) if you wish to use it.'
end

# Possible values are :truncation and :transaction
# The :transaction strategy is faster, but might give you threading problems.
# See https://github.com/cucumber/cucumber-rails/blob/master/features/choose_javascript_database_strategy.feature
Cucumber::Rails::Database.javascript_strategy = :truncation

Around do |scenario, block|
  Rails.application.load_seed
  Rails.logger.debug "-------> Before Scenario: #{scenario.name}"
  DatabaseCleaner.cleaning(&block)
  Rails.logger.debug "<------- After Scenario: #{scenario.name}"
end
