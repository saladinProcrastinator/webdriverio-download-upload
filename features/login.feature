Feature: The Wetransfer website

  Scenario: As a user, I can upload multiple files and create share link

    Given I open the WeTransfer home page
    When I accept the cookies
    And I agree to the terms of service
    And I upload file "UploadPdf.pdf"
    And I upload file "UploadWord.docx"
    And I upload file "UploadVideo.mp4"
    And I toggle to "Get transfer link"
    And I click "Get a link" button
    Then I see "You’re done!" text is visible
    Then I see "Copy link" button is visible


  Scenario: As a user, I can download multiple files using transferred link
    Given I open "https://we.tl/t-yG9pCKo4Sn" the transferred link
    When I accept the cookies
    And I agree to the terms of service
    And I click "Download" button in the download widget
    Then I see "Your download has started" text is visible in the download widget
    And The files "UploadPdf.pdf" and "UploadVideo.mp4" and "UploadWord.docx" have been downloaded as "wetransfer-9215d5.zip"

