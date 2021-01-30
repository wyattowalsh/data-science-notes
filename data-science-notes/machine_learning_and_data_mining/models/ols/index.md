# Ordinary Least Squares

---

## Suggested Prerequisites

- [Linear Regression Modeling](https://makeuseofdata.com/machine_learning_and_data_mining/regression/index.html#linear-regression-modeling)

---

## Loss Function and Optimization Problem

The ***Ordinary Least Squares*** (OLS) loss function is simply the **sum of squared error** (SSE) error term:

$$
L(\mathbf{\beta}) = \|\mathbf{y} - \hat{\mathbf{y}}\|_2^2 =  \|\mathbf{y} - \mathbf{X}\mathbf{\beta}\|_2^2
$$

Using this function to formulate a *least-squares* optimization problem yields:

$$
\hat{\mathbf{\beta}} = \arg\min_{\mathbf{\beta}} L(\mathbf{\beta}) = \arg\min_{\mathbf{\beta}} \frac{1}{2n}  \|\mathbf{y}-\mathbf{X}\mathbf{\beta} \|_{2}^{2} 
$$

The $\frac{1}{2n}$ term is added in order to simplify gradient solving ($\frac{1}{2}$) and allow objective function convergence to the expected value of model error by the **Law of Large Numbers** ($\frac{1}{n}$). 

## Model Estimator

By setting the gradient of the loss function equal to zero and solving for the coefficient vector, $ \hat{\mathbf{ \beta }} $, the **OLS estimator** is found:

$$
\hat{\mathbf{\beta}} = (\mathbf{X}^\mathbf{T}\mathbf{X})^{-1}(\mathbf{X}^\mathbf{T}\mathbf{y}) 
$$

### Proving Uniqueness of the Estimator

The OLS estimator can be shown be unique by convexity as for any convex function will have a unique global minimum. The *second-order convexity conditions* state that a function is convex if it continuous, twice differentiable, and has an associated **Hessian** matrix that is **positive semi-definite**.   

The OLS loss function satisfies the first two conditions due to its **quadratic** nature. The OLS **Hessian** matrix can be found as: 

$$
\mathbf{H} = 2\mathbf{X}^\mathbf{T}\mathbf{X}
$$

This **Hessian** can be shown to be positive semi-definite as: 

$$
\mathbf{\beta}^\mathbf{T} (2\mathbf{X}^\mathbf{T}\mathbf{X}) \beta = 2(\mathbf{X}\beta)^\mathbf{T} \mathbf{X}\beta = 2 \|\mathbf{X}\mathbf{\beta}\|_2^2 \succeq 0 \: \: \: \forall \: \: \: \mathbf{\beta}
$$

Thus, by second-order convexity conditions, the OLS loss function is convex implying that the OLS estimator is the unique global minimizer to the OLS problem {cite}`aswani_2021_note_3,cs_189_2020_note_2`.

---

## Implementation

```{tabbed} Python
<script src="https://gist.github.com/wyattowalsh/11b165dcf426d6aba44ba7a8bf16836d.js"></script>
```
```{tabbed} R


```

## Sources

```{bibliography} references.bib
:filter: docname in docnames
```

---

Contributions made by our wonderful GitHub Contributors: [@wyattowalsh](https://github.com/wyattowalsh)
