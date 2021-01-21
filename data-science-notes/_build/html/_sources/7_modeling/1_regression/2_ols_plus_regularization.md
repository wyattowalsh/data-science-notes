# Ordinary Least Squares and Regularized Forms

This section will cover some of the most popular forms of regression models: ***Ordinary Least Squares***, ***Ridge Regression***, ***the Lasso***, and ***the Elastic Net***. These models are popular since they are highly efficient, robust in their predictions, and simple overall. All of these models depend on a **linear** modeling assumption underlying their fits. Linear models are presented below with each other model to follow. 

---

## Suggested Prerequisites:

- [Calculus](https://makeuseofdata/1_mathematical_preliminaries/1_calculus/index.html)

- [Linear Algebra](https://makeuseofdata.com/1_mathematical_preliminaries/2_linear_algebra/index.html)

- [Optimization](https://makeuseofdata.com/1_mathematical_preliminaries/3_optimization/index.html)

- [Modeling Basics](https://makeuseofdata.com/7_modeling/basics.html)

- [Regression Basics](https://makeuseofdata.com/7_modeling/1_regression/basics.html)

---

## Linear Regression Modeling

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

## Ordinary Least Squares

### Loss Function and Optimization Problem

The ***Ordinary Least Squares*** (OLS) loss function is simply the **sum of squared error** (SSE) error term:

$$
L(\mathbf{\beta}) = \|\mathbf{y} - \hat{\mathbf{y}}\|_2^2 =  \|\mathbf{y} - \mathbf{X}\mathbf{\beta}\|_2^2
$$

Using this function to formulate a *least-squares* optimization problem yields:

$$
\hat{\mathbf{\beta}} = \arg\min_{\mathbf{\beta}} L(\mathbf{\beta}) = \arg\min_{\mathbf{\beta}} \frac{1}{2n}  \|\mathbf{y}-\mathbf{X}\mathbf{\beta} \|_{2}^{2} 
$$

The $\frac{1}{2n}$ term is added in order to simplify gradient solving ($\frac{1}{2}$) and allow objective function convergence to the expected value of model error by the **Law of Large Numbers** ($\frac{1}{n}$). 

### Model Estimator

By setting the gradient of the loss function equal to zero and solving for the coefficient vector, $\hat\mathbf{\beta}$ the **OLS estimator** is found:

$$
\hat{\mathbf{\beta}} = (\mathbf{X}^\mathbf{T}\mathbf{X})^{-1}(\mathbf{X}^\mathbf{T}\mathbf{y}) 
$$

#### Proving Uniqueness of the Estimator

The OLS estimator can be shown be unique by convexity as for any convex function will have a unique global minimum. The *second-order convexity conditions* state that a function is convex if it continuous, twice differentiable, and has an associated **Hessian** matrix that is **positive semi-definite**.   

The OLS loss function satisfies the first two conditions due to its **quadratic** nature. The OLS **Hessian** matrix can be found as: 

$$
\mathbf{H} = 2\mathbf{X}^\mathbf{T}\mathbf{X}
$$

This **Hessian** can be shown to be positive semi-definite as: 

$$
\mathbf{\beta}^\mathbf{T} (2\mathbf{X}^\mathbf{T}\mathbf{X}) \beta = 2(\mathbf{X}\beta)^\mathbf{T} \mathbf{X}\beta = 2 \|\mathbf{X}\mathbf{\beta}\|_2^2 \succeq 0 \: \: \: \forall \: \: \: \mathbf{\beta}
$$

Thus, by second-order convexity conditions, the OLS loss function is convex implying that the OLS estimator is the unique global minimizer to the OLS problem.

---

## Ridge Regression

### Notes

- Also known as ***Tikhonov Regularization***

- Helps to reduce **overfitting** by reducing model variance through the addition of **shrinkage** towards zero across all coefficients. 

- Can be useful in times when **high multicollinearity** is found between predictors

### Loss Function and Optimization Problem

For the case of ***Ridge Regression***, the OLS loss function is modified by the addition of an $\mathbf{L}_2$ penalty with an associated tuning parameter, $\lambda$:

$$
L(\mathbf{\beta}) =  \|\mathbf{y} - \mathbf{X}\mathbf{\beta}\|_2^2 + \lambda\|\mathbf{\beta}\|_2^2 \: \: \: \text{ with tuning parameter $\lambda \geq 0$} 
$$

Using this function to formulate a *least-squares* optimization problem yields:

$$
\hat{\mathbf{\beta}} = \arg\min_{\mathbf{\beta}}  L(\mathbf{\beta}) = \arg\min_{\mathbf{\beta}} \frac{1}{2n} \|\mathbf{y}-\mathbf{X}\mathbf{\beta} \|_{2}^{2} + \lambda\|\mathbf{\beta}\|_2^2 
$$

Just like OLS, the $\frac{1}{2n}$ term is added in order to simplify gradient solving ($\frac{1}{2}$) and allow objective function convergence to the expected value of model error by the **Law of Large Numbers** ($\frac{1}{n}$).

### Model Estimator

By setting the gradient of the loss function equal to zero and solving for the coefficient vector, $\hat\mathbf{\beta}$, the **Ridge Estimator** is found:

$$
{\hat {\beta }}=(\mathbf {X} ^{\mathsf {T}}\mathbf {X} +\lambda \mathbf {I} )^{-1}\mathbf {X} ^{\mathsf {T}}\mathbf {y}
$$

#### Proving Uniqueness of the Estimator

It turns out that the **Ridge problem** can be shown to be strongly convex with a **positive definite** associated **Hessian** matrix. This **Hessian** is found as: 

$$
\mathbf{H} = 2\mathbf{X}^\mathbf{T}\mathbf{X} + 2 \lambda \mathbf {I}
$$

And to show its positive definiteness:

$$
\mathbf{\beta}^\mathbf{T} (\mathbf{X}^\mathbf{T}\mathbf{X} + \lambda \mathbf {I})\mathbf{\beta} = (\mathbf{X}\mathbf{\beta})\mathbf{X}\mathbf{\beta} + \lambda \mathbf{\beta}^\mathbf{T}\mathbf{\beta} = \|\mathbf{X}\mathbf{\beta}\|_2^2 + \lambda \|\mathbf{\beta}\|_2^2 \succ 0 \: \: \: \forall \:\:\:  \mathbf{\beta} \neq \mathbf{0}
$$

Thus, the **Ridge estimator** is the *unique* global minimizer to the **Ridge Regression** problem. 

---

## The Lasso for Regression

### Notes

- The acronym stands for ***Least Absolute Shrinkage and Selection Operator***
- Helps to reduce **overfitting** by reducing model variance through the addition of **shrinkage** to zero for selective coefficients.
- Can be useful in **feature selection** tasks due to its automated feature selection property

### Loss Function and Optimization Problem

The associated loss function for **the Lasso** modifies the OLS loss function through the addition of an $\mathbf{L}_1$ penalty controlled by a tuning parameter, $\lambda$:

$$
L(\mathbf{\beta}) =  \|\mathbf{y} - \mathbf{X}\mathbf{\beta}\|_2^2 + \lambda\|\mathbf{\beta}\|_1 \: \: \: \text{ with tuning parameter $\lambda \geq 0$} 
$$

Using this function to formulate a *least-squares* optimization problem yields:

$$
\hat{\mathbf{\beta}} = \arg\min_{\mathbf{\beta}}  L(\mathbf{\beta}) = \arg\min_{\mathbf{\beta}} \frac{1}{2n} \|\mathbf{y}-\mathbf{X}\mathbf{\beta} \|_{2}^{2} + \lambda\|\mathbf{\beta}\|_1
$$

No closed-form solution exists in this case since the addition of the $\mathbf{L}_1$ penalty adds a non-smooth, absolute component to the loss function rendering it no longer continuously differentiable.  Thus, a discrete optimization technique is required to solve for model coefficient estimates. 