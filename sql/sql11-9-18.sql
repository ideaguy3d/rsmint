USE RSMint_1
GO

SELECT TOP(1000) * FROM [RSMint_1].[dbo].[Picks_1];

SELECT [id], [coordinator_name], [due_date], [quantity], [paper_description], [envelope_description]
FROM [RSMint_1].[dbo].[Picks_1]
GO

CREATE TABLE Picks_1 (
	 id INT IDENTITY(1,1) NOT NULL
	,coordinator_name VARCHAR(255) NULL
	,rsm_datetime DATETIME DEFAULT(GETDATE()) NOT NULL
	,job_number INT NULL
	,stock_location VARCHAR(560) NULL
	,due_date DATETIME DEFAULT(GETDATE()) NULL
	,image_url VARCHAR(255) NULL
	,rsm_sku VARCHAR(255) NULL
)
GO

ALTER TABLE [RSMint_1].[dbo].[Picks_1]
ADD  paper_description VARCHAR(768)
	,envelope_description VARCHAR(768)
	,quantity VARCHAR(768)
	,paper_img_url VARCHAR(768)
	,envelope_img_url VARCHAR(768)
GO

DROP TABLE [mhWork].[dbo].[Picks_1]
GO

INSERT INTO [RSMint_1].[dbo].[Picks_1]
	(coordinator_name, job_number, quantity, paper_description, envelope_description)
VALUES
	 (
	   'Venus', 11111, 20590
	   ,'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets'
	   ,'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with'
	 )
	,(
	  'Tori', 11111, 5168
	  ,'Paper: Post Card 67# yellow vellum Bristol/ first class pre-sort /box permit imprint 1935'
	  ,''
	  )
	,(
	 'Leslie', 11111, 2575
	  ,'Paper: Post Card 13x19 100# gloss cover / 9 up / first class pre-sort /box permit imprint 1935 / final size 4x6 / 662 sheets'
	  ,''
	 )
	,(
	  'Rosaline', 11111, 6134
	  ,'Paper: Post Card 67# yellow vellum Bristol/ first class pre-sort /box permit imprint 1935'
	  ,'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with'
	 )
GO

UPDATE [RSMint_1].[dbo].[Picks_1]
SET  [quantity] = 6134
	,[paper_description] = 'Paper: Post Card 67# yellow vellum Bristol/ first class pre-sort /box permit imprint 1935'
	,[envelope_description] = 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with'
WHERE [paper_description] IS NULL OR [envelope_description] IS NULL
GO








--