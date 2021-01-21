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

No closed-form solution exists in this case since the addition of the $\mathbf{L}_1$ penalty adds a non-smooth, absolute component to the loss function rendering it no longer continuously differentiable.  Thus, a discrete optimization technique is required to solve for model coefficient estimates. Many algorithms can be utilized for this purpose such as ***LARS*** (Least Angle Regression) and ***Forwards Stepwise Regression***. Coordinate Descent seems to be the most favored algorithm currently and used in the popular packages ***Scikit-Learn*** in Python and ***GLMNET*** in R.

### Pathwise Coordinate Descent

Here, all features should be standardized to have zero mean and unit variance. A $p+1$ length coefficient vector is then initialized to zero. Cycles are run across all coefficients until convergence when the values stabilize within a certain tolerance. For every cycle, across each coefficient, a coefficient update is found. 

The simplest form of update calculates the simple least-squares coefficient value using the partial residuals across all other features in the design matrix and subsequently applies the soft-thresholding operator with the tuning parameter penalty as:

$$
\beta_j = \mathbf{S}(\beta_j^*, \lambda) = sign(\beta_j^*)(\left|\beta_j^*\right| - \lambda)_+ =
 \begin{cases} 
     \beta_j^* - \lambda & \beta_j^* > 0 \text{ and } \lambda <  \left|\beta_j^*\right|\\
     \beta_j^* + \lambda & \beta_j^* > 0 \text{ and } \lambda < \left|\beta_j^*\right| \\
     0 & \lambda \geq  \left|\beta_j^*\right|
  \end{cases}
$$

where $\mathbf{S}$ is the soft-thresholding operator and $\beta_j^*$ is the update as calculated by: 

$$
\beta_j^* = \frac{1}{n}\sum_{i=1}^{n} x_{i, j}r_{i, j}
$$

where $r_{i,j}$ is the partial residuals across as found by:

$$
r_{i,j} = y_i - \sum_{k \neq j} x_{i, k}\beta_k
$$

#### Naive Updates

Improved efficiency can be found by updated via:

$$
\beta_j^* = \frac{1}{n}\sum_{i=1}^{n} x_{i, j}r_i + \beta_j

$$

where $r_i$ is the current model residual for all samples, $n$.

#### Covariance Updates

When the number of samples is much greater than the number of features ($n \gg p$) further efficiency boosts can be gained by replacing the first term of the ***Naive update*** above as:

$$
\sum_{i=1}^{n} x_{i, j}r_i = \langle x_j, y \rangle - \sum_{k: \left|\beta_k\right| > 0} \langle x_j, x_k \rangle \beta_k
$$

#### Warm Starts

It has been shown that fitting a sequence of models using the solution of one as the starting coefficient values of the next can be faster than a single fit for some small $\lambda$ values. This sequence should begin at $\lambda_{max}$, the smallest value of the tuning parameter for which all coefficient estimates are brought to zero, and end at $\epsilon \cdot \lambda_{max}$ with around 100 values on a log scale where $\epsilon$ is typically 0.001:

$$
\lambda_{\text{max}} \rightarrow \lambda_{\text{min}} = \epsilon \cdot \lambda_{\text{max}}
$$

$\lambda_{max}$ can be found by finding the minimum value that will bring the estimates for all model coefficients to zero. Thus any values greater than this value will result in total sparsity of the coefficient vector. This value can be found as: 

$$
\lambda_{\text{max}} = \frac{\max_l \left|\langle x_l, y \rangle \right|}{n}
$$

When ***warm starts*** are utilized the Coordinate Descent algorithm is referred to as ***Pathwise Coordinate Descent***. 

### Implementation in Python Using NumPy

<script src="https://gist.github.com/wyattowalsh/6a95b1c9ad6118b196336cffd5de4f72.js"></script>

```warning
In practice it is recommended to use a cross-validation technique such as K-Fold cross-validation to choose the tuning parameter, $\lambda$.
```

### Implementation in Python Using Scikit-Learn

- [Plain Lasso Function Documentation]([sklearn.linear_model.Lasso &mdash; scikit-learn 0.24.1 documentation](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html)

- [Lasso Cross-Validation Function Documentation]([sklearn.linear_model.LassoCV &mdash; scikit-learn 0.24.1 documentation](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoCV.html#sklearn.linear_model.LassoCV)

- [Scikit-Learn User Guide Entry]([1.1. Linear Models &mdash; scikit-learn 0.24.1 documentation](https://scikit-learn.org/stable/modules/linear_model.html#lasso)