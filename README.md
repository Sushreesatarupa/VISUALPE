

## VisualPe

### Fintech Open Month Hackathon

## Tagline
VisualPe dashboard is a visualization tool that helps to track all your relevant financial investments and cash flow, visualize your portfolio, and enable you to track expenses, and returns in detail.

---

## The problem it solves
DESCRIBE WHAT CAN PEOPLE USE IT FOR, OR HOW IT MAKES EXISTING TASKS EASIER/SAFER E.T.C (MARKDOWN SUPPORTED)
0/2000

---

## Challenges we ran into
1) It took time to understand the setu aa API and the data flow.
2) The consent procedure was quite hectic, but we got through it.
3) It was difficult for us to put our cloud of ideas into the working prototype in 3-4 days, but we worked hard to get over it and overcame the challenges.

---

## Technologies we used
-	Our working prototype focuses on using PhonePe Pulse data as the source of Open Data and setu Account Aggregator framework as a foundation to power the Improved Visualization based on the financial information. 
-	The front-end of our website uses HTML, CSS, javascript, jquery, bootstrap, and material UI.
-	For the back-end, we have used node.js, express.js, setu API, and Heroku for hosting.
-	For the database we have used MongoDB and mongoose.

---


#	Introduction
•	Consider that 65% of people are visual learners; according to several studies, providing people with graphical data illustrations increases understanding and leads to better financial decisions.

-	Therefore, we have tried to use Charts, Tables, Graphs, and Dashboards for data visualization: This is possible due to setu account aggregator and phonepay pulse.

-	It will provide different perspectives on the financial data, giving insights that can facilitate strategic decisions and actions that improve the overall finance management.
-	Our project targets professionals and civilians who need a personalized finance management system irrespective of their location, situation, and time.

-	VisualPe dashboard will help you to track all your relevant finance PIs, allow effective cash management, and enables you to track expenses and profits in detail.

-	It will power all big and small companies, investors, MSME to grow their businesses and profit by analyzing their statistics.


-	It will help senior citizens to keep track of their pensions and easily calculate their assets.

---

#	Features

1)	bar graph 
In the bar graphs, the user can see the amount invested vs. the current value for the respective fi. The sample data we have used is from the setu account aggregator. 

2)	portfolio
A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, and cash equivalents. Most of us try to keep track of our financial portfolio. Therefore, we have a pie chart on the dashboard which shows the user their financial portfolio and the percentage of investment in each fi.

3)	table of maturity dates 
the maturity date is when the user will get the final payment on a loan or other financial instrument, such as a bond or term deposit where the principal is due to be paid. We have added a maturity dates table, where a user can track the dates and accordingly plan their future expenses for reasons like education fees, marriage, medical fees, or any other asset or emergency.

4)	all banks in one 
The user gets access to the data of each and every bank registered on his mobile number.
We can also use the bank select filter below the profile tab to view specific or selective groups of bank data.

5)	deposit 
-	We have tried to show the UPI vs non-UPI transactions, credit vs debit, and balance of each account.
-	We have also compared users’ UPI transactions division to the average Indian UPI transaction division by using phonepe pulse data.

6)	We have tried to add security by authenticating the user with OTP on the registered mobile number and an additional secret pin.

7)	Considering tough times, using the application, your phone number, and your pin, your family can access the information related to the financial assets and insurance policies, decreasing stress from the financial side.

---

#	Our Webapp
•	Our system has four central units. 
•	The front-end, back-end, database, and the AA(account aggregator) 

1)	When the user opens the app, the user gets redirected to the login page.
2)	Users have to enter a phone number and a secret pin to access visualpe services.
3)	This page has been rigorously designed and only allows the user to log in when he had filled all inputs appropriately. 
4)	If, during login/registration, any error occurs, the page prompts the user to try again and reloads. Upon submission of credentials, it shows a loading screen.
5)	If the user is logging in for the first time, they get redirected to a consent filling page where the user selects the bank(s) for which he wants to use visualpe features.
6)	Upon completion, the user can see a redirect button back to the home page. 
7)	If the user is an existing one, the user is directly redirected to the home page if the credentials are correct.
8)	We have a node.js back-end that provides API endpoints to the client and interacts with the account aggregator.
9)	For new users, it generates a consent form request. It stores all user credentials in a database
10)	The Back-end also serves as a notification endpoint to AA. 
11)	If consent gets rejected, it removes the user details (so on next login in, he will again fill consent)
12)	If accepted, the phone number, client id, and hashed pin gets saved in our database. 
13)	On data request from the client, it generates a data session, fetches data from aa, and sends it to the client-side.

---

# Post Hackathon
-	Our project is a fully working application and we have some future plans for it. 
-	After the hackathon, we will work on a prediction system, automate maturity value calculations, add an inbuilt calculator, and tax on profits of various assets.

---


## Links
ADD LINKS TO GITHUB, WEBSITE, APP STORE E.T.C OR WHEREVER THE PROJECT CAN BE TESTED LIVE
- WEBSITE LINK: https://ansuman528.github.io/VisualPe/
- REPO: https://github.com/Sushreesatarupa/VISUALPE/
- FRONTEND: https://github.com/ansuman528/VisualPe
- BACKEND: https://github.com/Sayansree/visual-pay-backend/

---

## Video Demo


---

## Pictures
UPLOAD A MAXIMUM OF 5 PICTURES (SIZE: MAX 1MB EACH) SHOWCASING YOUR PROJECT (THE FIRST IMAGE WILL BE USED AS A PREVIEW ON SOCIAL MEDIA).
+
+
+
+
+

---


## Platforms this project is built for: Web

---

## References

1. https://www.phonepe.com/pulse/
2. https://docs.setu.co/data/account-aggregator/fi-data-types
3.
