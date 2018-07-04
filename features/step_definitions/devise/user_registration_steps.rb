When(/^I register a new account$/) do
  visit '/users/sign_up'

  @last_registered_user_email = FFaker::Internet.email
  @last_registered_user_password = FFaker::Lorem.words.join(' ')
  fill_in 'Email', with: @last_registered_user_email
  fill_in 'Password', with: @last_registered_user_password

  click_button 'Register'

  # Wait for the server response
  find('.alert-success', text: 'Registration successfull')
end

When(/^I confirm it from the received email$/) do
  step "\"#{@last_registered_user_email}\" open the email with subject " \
       '"Confirmation instructions"'
  step 'I click the first link in the email'
end

Then(/^I should be able to login$/) do
  fill_in 'Email', with: @last_registered_user_email
  fill_in 'Password', with: @last_registered_user_password
  click_button 'Login'

  expect(page).to have_content("Hi #{@last_registered_user_email}")
end
