const path = require("path")

const HomePageTemplate = path.resolve("./src/templates/HomePage/index.tsx")
const RecipePageTemplate = path.resolve("./src/templates/RecipeList/index.tsx")
const BlogPageTemplate = path.resolve("./src/templates/BlogsList/index.tsx")
const RecipeTemplate = path.resolve("./src/templates/Recipe/index.tsx")
const BlogTemplate = path.resolve("./src/templates/Blog/index.tsx")
const AboutTemplate = path.resolve("./src/templates/About/index.tsx")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulRecipe {
        nodes {
          id
          name
        }
      }
      allContentfulBlog {
        nodes {
          title
          id
        }
      }
    }
  `)

  data.allContentfulRecipe.nodes.forEach(({ id, name }) => {
    const slug = name.toLowerCase().split(" ").join("-")

    createPage({
      path: `/recipes/${slug}`,
      component: RecipeTemplate,
      context: {
        id,
      },
    })
  })

  data.allContentfulBlog.nodes.forEach(({ title, id }) => {
    const slug = title.toLowerCase().split(" ").join("-")

    createPage({
      path: `/blogs/${slug}`,
      component: BlogTemplate,
      context: {
        id,
      },
    })
  })

  createPage({
    path: "/",
    component: HomePageTemplate,
  })

  createPage({
    path: "/recipes",
    component: RecipePageTemplate,
  })

  createPage({
    path: "/blogs",
    component: BlogPageTemplate,
  })

  createPage({
    path: "/about-us",
    component: AboutTemplate,
  })
}
