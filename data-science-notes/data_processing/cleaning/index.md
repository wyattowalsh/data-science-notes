# Cleaning

---

## Suggested Prerequisites

---

## Overview

Data cleaning is the process of editing, correcting, and structuring data within a data set so that it’s generally uniform and prepared for analysis. This includes removing corrupt or irrelevant data and formatting it into a language that computers can understand for optimal analysis.

There is an often repeated saying in data analysis: “Garbage in, garbage out,” which means that, if you start with bad data (garbage), you’ll only get “garbage” results.

Data cleaning is often a tedious process, but it’s absolutely essential to get top results and powerful insights from your data.

Sources: [MonkeyLearn](https://monkeylearn.com/blog/data-cleaning-steps/)
---
## Data Cleaning Steps & Techniques

Here is a 6 step data cleaning process to make sure your data is ready to go. 

    Step 1: Remove irrelevant data
    Step 2: Deduplicate your data
    Step 3: Fix structural errors
    Step 4: Deal with missing data
    Step 5: Filter out data outliers
    Step 6: Validate your data

1. Remove irrelevant data
First, you need to figure out what analyses you’ll be running and what are your downstream needs. What questions do you want to answer or problems do you want to solve?

Take a good look at your data and get an idea of what is relevant and what you may not need. Filter out data or observations that aren’t relevant to your downstream needs.

2. Deduplicate your data
If you’re collecting data from multiple sources or multiple departments, use scraped data for analysis, or have received multiple survey or client responses, you will often end up with data duplicates. 

Duplicate records slow down analysis and require more storage. Even more importantly, however, if you train a machine learning model on a dataset with duplicate results, the model will likely give more weight to the duplicates, depending on how many times they’ve been duplicated. So they need to be removed for well-balanced results.

3. Fix structural errors
Structural errors include things like misspellings, incongruent naming conventions, improper capitalization, incorrect word use, etc. These can affect analysis because, while they may be obvious to humans, most machine learning applications wouldn’t recognize the mistakes and your analyses would be skewed. 

For example, if you’re running an analysis on different data sets – one with a ‘women’ column and another with a ‘female’ column, you would have to standardize the title. Similarly things like dates, addresses, phone numbers, etc. need to be standardized, so that computers can understand them.

4. Deal with missing data
Scan your data or run it through a cleaning program to locate missing cells, blank spaces in text, unanswered survey responses, etc. This could be due to incomplete data or human error. You’ll need to determine whether everything connected to this missing data – an entire column or row, a whole survey, etc. – should be completely discarded, individual cells entered manually, or left as is.

The best course of action to deal with missing data will depend on the analysis you want to do and how you plan to preprocess your data. Sometimes you can even restructure your data, so the missing values won’t affect your analysis.

5. Filter out data outliers
Outliers are data points that fall far outside of the norm and may skew your analysis too far in a certain direction. For example, if you’re averaging a class’s test scores and one student refuses to answer any of the questions, his/her 0% would have a big impact on the overall average. In this case, you should consider deleting this data point, altogether. This may give results that are “actually” much closer to the average.

6. Validate your data
Data validation is the final data cleaning technique used to authenticate your data and confirm that it’s high quality, consistent, and properly formatted for downstream processes. 

Do you have enough data for your needs?
Is it uniformly formatted in a design or language that your analysis tools can work with?
Does your clean data immediately prove or disprove your theory before analysis?
Validate that your data is regularly structured and sufficiently clean for your needs. Cross check corresponding data points and make sure nothing is missing or inaccurate.

## Sources

```{bibliography} references.bib
:filter: docname in docnames
:style: plain
```

---

Contributions made by our wonderful GitHub Contributors: 