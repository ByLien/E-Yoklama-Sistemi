import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/header/PageHeader'
import { Button } from '../../components/button/Button'
import Swal from 'sweetalert2'
import CodeService from '../../services/codeService'
import { Link, NavLink } from 'react-router-dom'

const codeService = new CodeService()

const CodeListPage = () => {
	const [codes, setCodes] = useState([])

	useEffect(() => {
	  const codes = codeService.getAllCode()
	  setCodes(codes)
	}, [])
	
	const handleNewCodeClick = () => {		
		Swal.fire({
			title: "Yoklama Açıklaması Giriniz",
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Oluştur',
			showLoaderOnConfirm: true,
			preConfirm: (desc) => {
				codeService.addCode({description: desc})
			}
		}).then((result) => {
			if (result.isConfirmed) {
				const codes = codeService.getAllCode()
				setCodes(codes)
			}
		})
	}

	const handleRemoveAll = () => {
		Swal.fire({
			title: 'Emin misiniz?',
			text: 'Tüm yoklamalar silinecek!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Evet, sil!'
		}).then((result) => {
			if (result.value) {
				codeService.removeAll()
				setCodes([])
				Swal.fire({
					title: 'Başarılı',
					text: 'Tüm yoklamalar silindi!',
					icon: 'success',
				})
			}
		})
	}

	const handleRemoveCode = (code) => {
		Swal.fire({
			title: 'Emin misiniz?',
			text: `${code} kodlu yoklama silinecek!`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Evet, sil!'
		}).then((result) => {
			if (result.value) {
				codeService.removeCode(code)
				setCodes(codes.filter(c => c.code !== code))

				Swal.fire({
					title: 'Başarılı',
					text: `${code} yoklama silindi!`,
					icon: 'success',
				})
			}
		})
	}

	return (
		<div className='container'>
			<PageHeader text={"Yoklama Kod Listesi"} />
			<div style={{ display: "flex", justifyContent: "end" }}>

				<Button basic style={{padding: 15}} className="btn-danger" onClick={handleRemoveAll}>Tüm kodları Sil</Button>
				<Button basic onClick={handleNewCodeClick}>Yeni Kod Oluştur</Button>
			</div>
			<div className='m2'>
				<table>
					<thead>
						<tr>
							<th>Kod</th>
							<th>Açıklama</th>
							<th>İşlemler</th>
						</tr>
					</thead>
					<tbody>
						{codes?.map((code, index) => (
							<tr key={index}>
								<td>{code.code}</td>
								<td>{code.description}</td>
								<td>
									<Link to={code.code+""} className="btn basic" style={{ backgroundColor: "orange" }}>
										Detay
									</Link>
									<Button basic className='btn-danger' onClick={() => handleRemoveCode(code.code)}>
										Sil
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CodeListPage