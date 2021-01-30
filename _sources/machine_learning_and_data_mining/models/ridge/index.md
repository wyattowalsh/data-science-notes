# Ridge Regression

---

## Suggested Prerequisites

- [Linear Regression Modeling](https://makeuseofdata.com/machine_learning_and_data_mining/regression/index.html#linear-regression-modeling)

- [Ordinary Least Squares](https://makeuseofdata.com/machine_learning_and_data_mining/models/ols/index.html)

---

## Notes

- Also known as ***Tikhonov Regularization***

- Helps to reduce **overfitting** by reducing model variance through the addition of **shrinkage** towards zero across all coefficients. 

- Can be useful in times when **high multicollinearity** is found between predictors

## Loss Function and Optimization Problem

For the case of ***Ridge Regression***, the OLS loss function is modified by the addition of an $\mathbf{L}_2$ penalty with an associated tuning parameter, $\lambda$:

$$
L(\mathbf{\beta}) =  \|\mathbf{y} - \mathbf{X}\mathbf{\beta}\|_2^2 + \lambda\|\mathbf{\beta}\|_2^2 \: \: \: \text{ with tuning parameter $\lambda \geq 0$} 
$$

Using this function to formulate a *least-squares* optimization problem yields:

$$
\hat{\mathbf{\beta}} = \arg\min_{\mathbf{\beta}}  L(\mathbf{\beta}) = \arg\min_{\mathbf{\beta}} \frac{1}{2n} \|\mathbf{y}-\mathbf{X}\mathbf{\beta} \|_{2}^{2} + \lambda\|\mathbf{\beta}\|_2^2 
$$

Just like OLS, the $\frac{1}{2n}$ term is added in order to simplify gradient solving ($\frac{1}{2}$) and allow objective function convergence to the expected value of model error by the **Law of Large Numbers** ($\frac{1}{n}$).

## Model Estimator

By setting the gradient of the loss function equal to zero and solving for the coefficient vector, $ \hat{\mathbf{ \beta }} $, the **Ridge Estimator** is found:

$$
{\hat {\beta }}=(\mathbf {X} ^{\mathsf {T}}\mathbf {X} +\lambda \mathbf {I} )^{-1}\mathbf {X} ^{\mathsf {T}}\mathbf {y}
$$

### Proving Uniqueness of the Estimator

It turns out that the **Ridge problem** can be shown to be strongly convex with a **positive definite** associated **Hessian** matrix. This **Hessian** is found as: 

$$
\mathbf{H} = 2\mathbf{X}^\mathbf{T}\mathbf{X} + 2 \lambda \mathbf {I}
$$

And to show its positive definiteness:

$$
\mathbf{\beta}^\mathbf{T} (\mathbf{X}^\mathbf{T}\mathbf{X} + \lambda \mathbf {I})\mathbf{\beta} = (\mathbf{X}\mathbf{\beta})\mathbf{X}\mathbf{\beta} + \lambda \mathbf{\beta}^\mathbf{T}\mathbf{\beta} = \|\mathbf{X}\mathbf{\beta}\|_2^2 + \lambda \|\mathbf{\beta}\|_2^2 \succ 0 \: \: \: \forall \:\:\:  \mathbf{\beta} \neq \mathbf{0}
$$

Thus, the **Ridge estimator** is the *unique* global minimizer to the **Ridge Regression** problem. {cite}`cs_189_2020_note_2,aswani_2021_note_8`

---

## Implementation

```{tabbed} Python
<script src="https://gist.github.com/wyattowalsh/d213f0db32ac06cf49db5c84cc63d720.js"></script>
```
```{tabbed} R

```

---

## Sources

```{bibliography} references.bib
:filter: docname in docnames
```

---

Contributions made by our wonderful GitHub Contributors: [@wyattowalsh](https://github.com/wyattowalsh)

