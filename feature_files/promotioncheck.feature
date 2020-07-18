@CareerPromotionSubscription
Feature: This feature is to automate testcase ELSC_020
  I want to use this template for my feature file
  
  
  @GotoAdministration
   Scenario: To verify whether application allows admin to create career, promotion & subscribe session to promotion
          Given I have launch the application 
          When I entered username "admin" and password "admin@123"
          Then I click on login button
          When I click the Registration tab
  
   @CreateCareer
   Scenario: To verify whether application allows admin to create career 
           When I click career and promotions link
           When I click the career link
           When I click add icon
           Then I enter valid credentials in Name textbox as "QA"
           When I click add button
           Then Item is added
            
    @CreatePromotion 
    Scenario: To verify whether application allows admin to create promotion
            Then I click on career and promotions link
            When I click on Promotions icon
            When I click on Add icon
            Then I enter credentials in nametextbox as "QA for Tester"
            When I Click on Add button
            Then Item added message displayed
            
            
    @CreateSubscription
     Scenario: To verify whether application allows admin to subscribe session to promotion
            When I click on subscribe sessions to promotion icon
            Then select session in Sessions not subscribed : window
            When I click on -> arrow
            When I click on subscribe sessions in promotion window button
            Then session should get added into promotion