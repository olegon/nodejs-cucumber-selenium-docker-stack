Feature: Google Search

    @search
    Scenario: Search something on google
        Given that I am on Google Search Page
        When I type what I want to find
        Then I see the results

