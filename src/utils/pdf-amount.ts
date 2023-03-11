import * as pdfMake from 'pdfmake/build/pdfmake.js'
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js'
import { IDataExpanse } from '../components/TableExpanse'

export const pdfAmount = (amounts: IDataExpanse[]) => {
  (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs

  const reportTitle = [
    {
      text: 'Despesas',
      fontSize: 14,
      bold: true,
      margin: [15, 20, 0, 45]
    }
  ]

  const data = amounts.map((amount) => {
    return [
      {text: amount.date, fontSize: 10, margin: [0, 2, 0 ,2]},
      {text: amount.expanseType, fontSize: 10, margin: [0, 2, 0 ,2]},
      {text: amount.amount, fontSize: 10, margin: [0, 2, 0, 2]},
      {text: amount.type, fontSize: 10, margin: [0, 2, 0 ,2]},
      {text: amount.description, fontSize: 10, margin: [0, 2, 0, 2]}
    ]
  })

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*', '*',],
        body: [
          [
            {text: 'Data', style: 'tableHeader', fontSize: 12},
            {text: 'Categoria', style: 'tableHeader', fontSize: 12},
            {text: 'Valor', style: 'tableHeader', fontSize: 12},
            {text: 'Tipo', style: 'tableHeader', fontSize: 12},
            {text: 'Descrição', style: 'tableHeader', fontSize: 12},
          ],
          ...data
        ]
      },
      layout: 'lightHorizontalLines'
    }
  ]

  function Footer(currentPage: number, pageCount: number) {
    return [
      {
        text: currentPage + '/' + pageCount,
        alignment: 'right',
        fontSize: 9,
        bold: false,
        margin: [0, 10, 20, 0]
      }
    ]
  }

  const docDefinitions: any = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reportTitle],
    content: [details],
    footer: [Footer],
  }

  pdfMake.createPdf(docDefinitions).download()
}
