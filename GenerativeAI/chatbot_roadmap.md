Day 1 (Today) — Maths + PyTorch basics

1. 1 hr: Learn AI math foundations (vectors, matrices, probability, gradients)

2. 1 hr: Run a PyTorch “Hello World” — tensor ops + simple NN

Day 2 — Hugging Face Transformers

3. Load a model (bert, gpt2) and run sentiment analysis & text generation

4. Learn tokenizers & pipelines

Day 3 — LangChain basics

5. Make a chatbot with prompt templates and memory

6. Call a Hugging Face LLM from LangChain

Day 4 — LangGraph workflow building

7. Build a multi-step AI workflow (query → summarizer → fact-checker → answer)

Day 5 — Unsloth fine-tuning

8. Understand LoRA/QLoRA

9. Fine-tune a small Hugging Face model on a toy dataset

Day 6 — Diffusers

10. Generate images from text using Stable Diffusion

11. Experiment with prompt engineering

Day 7 (Sunday) — Integration mini-project

Example: “AI Movie Recommender + Poster Generator”

LangChain + LangGraph to process query

Hugging Face model for recommendations

Diffusers to generate movie poster

(Optional) Fine-tuned model via Unsloth




# Maths for AI

1. Linear Algebra (Core for AI)
Used for: embeddings, neural network weights, vector similarity, transformers

Scalars, Vectors, Matrices, Tensors

Matrix operations (addition, multiplication, transpose)

Dot product & Cross product

Matrix-Vector multiplication

Norms (L1, L2, max norm)

Orthogonality & projections

Matrix rank & linear independence

Determinants & inverses

Eigenvalues & Eigenvectors

Used in PCA & dimensionality reduction

SVD (Singular Value Decomposition)

Diagonalization

Positive semi-definite matrices (important in covariance matrices)

2. Probability & Statistics
Used for: model predictions, uncertainty, evaluation metrics, generative models

Basic probability rules (addition, multiplication, Bayes theorem)

Random variables (discrete & continuous)

Probability distributions

Bernoulli, Binomial, Poisson

Uniform, Normal (Gaussian), Exponential

Multivariate normal

Expectation, Variance, Standard deviation

Covariance & Correlation

Conditional probability & Independence

Law of total probability

Bayes theorem & Naive Bayes

Maximum Likelihood Estimation (MLE)

MAP (Maximum A Posteriori) estimation

Sampling methods (Monte Carlo, importance sampling)

3. Calculus (Optimization in AI)
Used for: gradient descent, backpropagation

Limits & continuity

Derivatives (partial & total)

Gradient vector (∇f)

Jacobian matrix

Hessian matrix

Chain rule

Taylor series expansion

Directional derivatives

Multivariable calculus

Functions of several variables

Level curves & surfaces

Optimization

Gradient descent & variants (SGD, Adam, RMSProp)

Constrained optimization (Lagrange multipliers)

4. Discrete Mathematics
Used for: graph neural networks, decision trees, search algorithms

Logic & Boolean algebra

Sets, relations, functions

Graph theory

Nodes, edges, adjacency matrix

BFS, DFS

Combinatorics (permutations, combinations)

Counting principles

5. Numerical Methods
Used for: solving equations, model stability, efficiency

Floating-point arithmetic & precision errors

Numerical integration & differentiation

Root-finding algorithms (Newton-Raphson, bisection method)

Matrix decompositions (LU, QR)

Iterative solvers for linear systems

6. Information Theory
Used for: loss functions, NLP, entropy-based measures

Entropy & Cross-entropy

KL Divergence

Mutual Information

Perplexity

Shannon’s information theory basics

7. Advanced Topics for Deep Learning
Vector spaces & subspaces

Manifolds & embeddings

Fourier transforms (for image/audio processing)

Wavelets

Singular Value Decomposition in NLP

Markov chains (for probabilistic models)

Reinforcement Learning math

Bellman equations

Policy gradient theorem

📌 Tip to Learn Efficiently for AI:

Step 1: Start with Linear Algebra + Probability (they cover 70% of AI needs)

Step 2: Move to Calculus for optimization

Step 3: Learn Information Theory + Numerical methods as needed for specific projects