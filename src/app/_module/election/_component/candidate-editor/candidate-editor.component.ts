import { Component } from '@angular/core';
import { Candidate } from '../../_dto/candidate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidate-editor',
  templateUrl: './candidate-editor.component.html',
  styleUrls: ['./candidate-editor.component.css']
})
export class CandidateEditorComponent {

  showCandidatePage = true;
  showAddCandidateForm = false;
  showModifyCandidateForm = false;

  electionNames: string[] = ['Fine Arts Secretary','Sports Secretary','Media Secretary'];
  selectedElection?: string;

  newCandidate: Candidate = new Candidate();
  
  candidates: Candidate[] = [
    {candidateId: 'LCVFA01', candidateDeptNo: '21UCS20', candidateName: 'Vetri Piriyan'},
    {candidateId: 'LCVFA02', candidateDeptNo: '21UCS21', candidateName: 'Nirmal'},
    {candidateId: 'LCVFA03', candidateDeptNo: '21UCS33', candidateName: 'Santhosh'},
    {candidateId: 'LCVFA04', candidateDeptNo: '21UCS45', candidateName: 'Maria Raj'},
  ];

  openModifyCandidateForm(candidate: Candidate) {
  }

  openDeleteCandidate(candidateId: string | undefined) {
    Swal.fire({
      html: 'Are you sure you want to remove Candidate ' + candidateId + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: 'red',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        //call delete method in service
        Swal.fire(
          'Deleted',
          candidateId + ' Candidate removed Successfully!',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', candidateId + ' Candidate details are safe!', 'error');
      }
    });
  }

  openAddCandidateForm() {
    this.showCandidatePage = false;
    this.showAddCandidateForm = true;
  }

  saveCandidate(newCandidate: Candidate) {
    Swal.fire('Saved', newCandidate.candidateId + ' Candidate added successfully!', 'success');
  }

  closeAddCandidateForm () {
    this.showAddCandidateForm = false;
    this.showModifyCandidateForm = false;
    this.showCandidatePage = true;
  }

}
