SELECT SUM(amount) AS total_revenue, MONTHNAME(charged_datetime) AS month FROM billing
WHERE charged_datetime >= '2012/03/01' AND charged_datetime <= '2012/03/31';

SELECT clients.client_id, SUM(amount) AS total_revenue FROM billing
JOIN clients ON billing.client_id = clients.client_id
WHERE clients.client_id = 2;

SELECT clients.client_id, CONCAT(clients.first_name, " ", clients.last_name) AS client, 
CONCAT(sites.domain_name) AS sites FROM sites
JOIN clients ON sites.client_id = clients.client_id
WHERE clients.client_id = 10;

SELECT clients.client_id, CONCAT(clients.first_name, " ", clients.last_name) AS client, 
COUNT(sites.site_id) AS no_of_websites, MONTHNAME(sites.created_datetime) AS month, YEAR(sites.created_datetime) AS year FROM sites
JOIN clients ON sites.client_id = clients.client_id
WHERE clients.client_id = 1
GROUP BY MONTH(sites.created_datetime), YEAR(sites.created_datetime); 
 
SELECT sites.domain_name, COUNT(leads.leads_id) AS leads, DATE_FORMAT(leads.registered_datetime, '%M %D, %Y') AS date FROM leads
JOIN sites ON leads.site_id = sites.site_id
WHERE leads.registered_datetime >= '2011/01/01' AND leads.registered_datetime <= '2011/02/15'
GROUP BY sites.site_id;

SELECT clients.client_id, CONCAT(clients.first_name, " ", clients.last_name) AS client, 
COUNT(leads.leads_id) AS No_of_leads FROM clients
LEFT JOIN sites ON clients.client_id=sites.client_id 
LEFT JOIN leads ON sites.site_id=leads.site_id 
WHERE leads.registered_datetime BETWEEN '2011/01/01' AND '2011/12/31'
GROUP BY clients.client_id;

SELECT CONCAT(clients.first_name," ",clients.last_name) as client_name,
COUNT(leads.leads_id) as number_of_leads, 
MONTHNAME(leads.registered_datetime) as month_generated
FROM clients
LEFT JOIN sites ON clients.client_id=sites.client_id 
LEFT JOIN leads ON sites.site_id=leads.site_id 
WHERE leads.registered_datetime BETWEEN '2011/01/01' and '2011/06/30'
GROUP BY leads.leads_id;

SELECT CONCAT(clients.first_name, " " , clients.last_name) AS client_name, sites.domain_name, 
count(leads.leads_id) AS number_of_leads, DATE_FORMAT(leads.registered_datetime, '%M %D, %Y') AS date FROM leads 
LEFT JOIN sites ON leads.site_id = sites.site_id
LEFT JOIN clients ON sites.client_id = clients.client_id
WHERE leads.registered_datetime >= '2011/01/01' AND registered_datetime <= '2011/12/31'
GROUP BY sites.domain_name;

SELECT CONCAT(clients.first_name, " " , clients.last_name) AS client_name, sites.domain_name, 
count(leads.leads_id) AS number_of_leads FROM leads 
LEFT JOIN sites ON leads.site_id = sites.site_id
LEFT JOIN clients ON sites.client_id = clients.client_id
GROUP BY sites.domain_name;

SELECT clients.client_id, CONCAT(clients.first_name, " " , clients.last_name) AS client_name, 
SUM(billing.amount) AS total_revenue, MONTHNAME(billing.charged_datetime) AS month, 
YEAR(billing.charged_datetime) AS year FROM billing
JOIN clients ON clients.client_id = billing.client_id
GROUP BY billing.amount
ORDER BY clients.client_id;

SELECT CONCAT(clients.first_name, " " , clients.last_name) AS client_name, 
GROUP_CONCAT(sites.domain_name) AS sites FROM sites
RIGHT JOIN clients ON sites.client_id = clients.client_id
GROUP BY clients.client_id;







