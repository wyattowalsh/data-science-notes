# The Lasso

---

## Suggested Prerequisites

- [Linear Regression Modeling](https://makeuseofdata.com/machine_learning_and_data_mining/regression/index.html#linear-regression-modeling)

- [Ordinary Least Squares](https://makeuseofdata.com/machine_learning_and_data_mining/models/ols/index.html)

---

## Notes

- The acronym stands for ***Least Absolute Shrinkage and Selection Operator***
- Helps to reduce **overfitting** by reducing model variance through the addition of **shrinkage** to zero for selective coefficients.
- Can be useful in **feature selection** tasks due to its automated feature selection property

## Loss Function and Optimization Problem

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

When ***warm starts*** are utilized the Coordinate Descent algorithm is referred to as ***Pathwise Coordinate Descent***. {cite}`friedman_hastie_tibshirani_2010,hastie_friedman_tibshirani_2009,aswani_2021_note_8,stanford_2006,hastie_friedman_tisbshirani_2017`

### Implementation in Python Using NumPy

<script src="https://gist.github.com/wyattowalsh/6a95b1c9ad6118b196336cffd5de4f72.js"></script>

```{warning}
In practice it is recommended to use a cross-validation technique such as K-Fold cross-validation to choose the tuning parameter, $\lambda$.
```

### Implementation in Python Using Scikit-Learn

- [Plain Lasso Function Documentation](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html)

- [Lasso Cross-Validation Function Documentation](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoCV.html#sklearn.linear_model.LassoCV)

- [Scikit-Learn User Guide Entry](https://scikit-learn.org/stable/modules/linear_model.html#lasso)

---

## Sources

```{bibliography} references.bib
:filter: docname in docnames
:style: plain
```

---

Contributions made by our wonderful GitHub Contributors: [@wyattowalsh](https://github.com/wyattowalsh)
