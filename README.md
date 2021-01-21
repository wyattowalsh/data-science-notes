# MakeUseofData.com: **_Data Science Notes_**

## Hey 👋 <br><br> Glad to see you here! 
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) ![deploy-book](https://github.com/wyattowalsh/data-science-notes/workflows/deploy-book/badge.svg) ![Website](https://img.shields.io/website?down_color=red&down_message=down%20%F0%9F%98%A8&up_color=green&up_message=online%20%F0%9F%91%8D&url=https%3A%2F%2Fmakeuseofdata.com)[![HitCount](http://hits.dwyl.com/wyattowalsh/data-science-notes.svg)](http://hits.dwyl.com/wyattowalsh/data-science-notes)


You have just landed in the repository of the open-source website: [MakeUseofData.com](https://makeuseofdata.com/)!     

So far, ***MakeUseofData*** has only been utilized for **_Data Science Notes_**, a collection of notes on topics necessary for data scientists. However, it would be awesome if there are any ideas for additional content to be hosted on [MakeUseofData.com](https://makeuseofdata.com/). These ideas could be like hosting live-updating data stories or results of web-crawling a certain trend. Anything regarding the title really! Feel free to submit any ideas via [**issues**](https://github.com/wyattowalsh/data-science-notes/issues) with the `enhancement` tag. 

> Please check out the [**Discussions**](https://github.com/wyattowalsh/data-science-notes/discussions) tab to help out with some ideas! 😊

![](site_preview.gif)

### Read below for information about **_Data Science Notes_** ⬇️

---

### Motivation

This project was first created as a place to host notes of one of the contributors as he endeavored to study various data science topics for job interviews. However, throughout that research, it was noticed that information on data science topics had wide dispersion; there were many many different sources of information to synthesize knowledge across the topics. Having seen the success of *Jupyter Book* deployments across several UC Berkeley courses, such as Data 8 with its textbook, [InferentialThinking.com](https://www.inferentialthinking.com/chapters/intro) it seemed like a good technology to create a repository of data science information since mathematical typesetting, in-page Jupyter Notebook usage, and additional plugins were available for use. 

### Usage

#### See Contribution Guidelines and Best Practices [**here**](https://github.com/wyattowalsh/data-science-notes/blob/master/CONTRIBUTING.md)

#### Building the book

If you'd like to develop on and build the  **_Data Science Notes_** book, you should:

- Clone this repository and run
- Run `conda env create -f environment.yml` to create a Conda environment with the necessary dependencies or `pip install -r requirements.txt` (it is recommended you do this within a virtual environment)
- (Recommended) Remove the existing `data_science_notes/_build/` directory
- Run `jupyter-book build data_science_notes/`

A fully-rendered HTML version of the book will be built in `data_science_notes/_build/html/`.

### Contributors

We welcome and recognize all contributions. You can see a list of current contributors in the [contributors tab](https://github.com/wyattowalsh/data_science_notes/graphs/contributors).

### Credits

This project is created using the excellent open source [Jupyter Book project](https://jupyterbook.org/) and the [executablebooks/cookiecutter-jupyter-book template](https://github.com/executablebooks/cookiecutter-jupyter-book).
