import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'v96jb1ag',
  dataset: 'production',
  apiVersion: '2022-02-20',
  token:
    'skw2RS3TmLIhST1U80LAymHgjsrFUydW8vkarDxRhaR4sx6yv1snk1DQbWqJ5P3ugBR7x3sFaSoI31pck6I25ws3iN2gGpDm3mnmXYj5pqx7nC69grNj4vHZv6pFn7YqFuW9Tbp33gi6uGZoaxMoWDiVr92boMXXR6wkUNFixrv1utodeYuF',
  useCdn: false,
})
