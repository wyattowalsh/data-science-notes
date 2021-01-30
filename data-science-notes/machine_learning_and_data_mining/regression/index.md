# Regression

---

## Suggested Prerequisites

- [Calculus](https://makeuseofdata/mathematical_topics/calculus/index.html)

- [Linear Algebra](https://makeuseofdata.com/mathematical_topics/linear_algebra/index.html)

- [Optimization](https://makeuseofdata.com/mathematical_topics/optimization/index.html)

---

## Overview

### Linear Regression Modeling

In this case, sample data is fit by a linear function as formalized by:

$$
y_i = \beta_0 + \beta_1x_{i,1} + \beta_2x_{i,2} + \ldots + \beta_px_{i,p} + \epsilon_i \hspace{5pt} \forall \hspace{5pt} i \in \{1, \ldots, n\}\\
$$

where $p$ is the number of features, $n$ is the number of samples and $\epsilon$ is an error term with mean of zero and finite variance. Or in vector notation:

$$
\mathbf{y} = \mathbf{X}\mathbf{\beta} + \mathbf{\epsilon}
$$

where $y$ is a response vector $[y_1, y_2, ..., y_n]^\mathbf{T}$ of length $n$, $\mathbf{X}$ is a $n \times (p + 1)$ **design matrix** of features $[\mathbf{1}, \mathbf{x_1}, \mathbf{x_2}, ..., \mathbf{x_p}]$, and $\mathbf{\beta}$ is a length $(p+1)$ coefficient vector $[\beta_0, \beta_1, \beta_2, ..., \beta_p]$ with $\beta_0$ an intercept term. This intercept term is included in the model through **data augmentation** of the column of $\mathbf{1}$s to the **design matrix**. When an intercept is not sought, this column can be omitted and $\mathbf{\beta}$ is length $p$. 

---

---

## Models

---

## Sources

```{bibliography}
:filter: docname in docnames
```

---

Contributions made by our wonderful GitHub Contributors: 