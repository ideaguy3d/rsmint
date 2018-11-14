
/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) * FROM [RSMint_1].[dbo].[Picks_1] ORDER BY [id] DESC
GO

ALTER TABLE [RSMint_1].[dbo].[Picks_1] DROP COLUMN [image_url], [pick_description]
GO

ALTER TABLE [RSMint_1].[dbo].[Picks_1] ADD mark_complete VARCHAR(10) NULL
GO

DELETE FROM [RSMint_1].[dbo].[Picks_1] WHERE [id] = 43 OR [id] = 42
GO

UPDATE [RSMint_1].[dbo].[Picks_1] 
SET [paper_img_url] = 'http://localhost/rsmint/images/paper.jpg',
	[paper_description] = 'Paper: Post Card 67# yellow vellum Bristol/ first class pre-sort /box permit imprint 1935',
	[job_number] = 11111
WHERE [paper_img_url] IS NULL OR [paper_img_url] = '' 
	OR [paper_description] IS NULL OR [paper_description] = ''
	OR [job_number] IS NULL OR [job_number] = ''
GO







--